package com.knoldus.auth.kerberos

import java.io.IOException
import java.security.{PrivilegedAction, PrivilegedActionException, PrivilegedExceptionAction}
import javax.security.auth.Subject
import javax.security.auth.kerberos.KerberosPrincipal
import javax.security.auth.login.LoginContext
import javax.servlet.http.{HttpServletResponse, HttpServletRequest}

import akka.event.LoggingAdapter
import com.typesafe.config.{Config, ConfigFactory}
import org.apache.commons.codec.binary.Base64
import org.ietf.jgss.{GSSCredential, GSSManager}

import scala.collection.JavaConverters._
import scala.concurrent.{ExecutionContext, Future}
import javax.servlet.http.Cookie

object SpnegoAuthenticator {
  private val cookieName = "spray.spnego"
  private val Authorization = "authorization"
  private val negotiate = "Negotiate"
  private val wwwAuthenticate = "WWW-Authenticate"

  def apply(config: Config = ConfigFactory.load())(implicit ec: ExecutionContext, log: LoggingAdapter): SpnegoAuthenticator = {
    val principal = config.getString("tresata.spray.spnego.kerberos.principal")
    val keytab = config.getString("tresata.spray.spnego.kerberos.keytab")
    val debug = config.getBoolean("tresata.spray.spnego.kerberos.debug")
    val domain = Some(config.getString("tresata.spray.spnego.cookie.domain")).flatMap { x => if (x == "") None else Some(x) }
    val path = Some(config.getString("tresata.spray.spnego.cookie.path")).flatMap { x => if (x == "") None else Some(x) }

    log.debug("principal {}", principal)
    log.debug("keytab {}", keytab)
    log.debug("debug {}", debug)
    log.debug("domain {}", domain)
    log.debug("path {}", path)

    new SpnegoAuthenticator(principal, keytab, debug, domain, path, Tokens(config))
  }
}

trait Rejection

case class MalformedHeaderRejection(message: String) extends Rejection

case class RawHeader(protocal: String, value: String) extends Rejection

case class AuthenticationFailedRejection(message: String, headers: List[RawHeader]) extends Rejection

class SpnegoAuthenticator(principal: String, keytab: String, debug: Boolean, domain: Option[String], path: Option[String], tokens: Tokens)(
  implicit ec: ExecutionContext, log: LoggingAdapter) {

  import SpnegoAuthenticator._

  private val subject = new Subject(false, Set(new KerberosPrincipal(principal)).asJava, Set.empty[AnyRef].asJava, Set.empty[AnyRef].asJava)
  private val kerberosConfiguration = new KerberosConfiguration(keytab, principal, debug)

  private val loginContext = new LoginContext("", subject, null, kerberosConfiguration)
  loginContext.login()

  private val gssManager = Subject.doAs(loginContext.getSubject, new PrivilegedAction[GSSManager] {
    override def run: GSSManager = GSSManager.getInstance
  })

  private def cookieToken(ctx: HttpServletRequest): Option[Either[Rejection, Token]] = try {
    println(ctx.getCookies)
    log.debug("@@@@@@@@@@@@@@@@@@@@  1")
    val sd: Option[Token] = if(ctx.getCookies.exists(_.getName == cookieName)){
      val sd: Option[Token] = ctx.getCookies.find(_.getName == cookieName).map { cookie => log.debug("cookie found"); cookie } match {
        case Some(cookie) =>
          log.debug("@@@@@@@@@@@@@@@@@@@@  3")
          Some(tokens.parse(cookie.getValue)).filter(!_.expired).map { token => log.debug("spnego token inside cookie not expired"); token }
        case None =>
          log.debug("@@@@@@@@@@@@@@@@@@@@  2")
          None
      }
      sd
    }else None
    sd.map(Right(_))
  }
  catch {
    case e: TokenParseException =>
      log.debug("@@@@@@@@@@@@@@@@@@@@  "+e.message)
      Some(Left(MalformedHeaderRejection(s"Cookie: ${cookieName} " + e.getMessage))) // malformed token in cookie
  }


  private def clientToken(ctx: HttpServletRequest): Option[Array[Byte]] = {
    val auth = Option(ctx.getHeader(Authorization))
    if (auth.isDefined && auth.get.startsWith(negotiate)) {
      log.debug("authorization header found")
      Some(new Base64(0).decode(auth.get.substring(negotiate.length).trim))
    } else None

  }

  private def challengeHeader(maybeServerToken: Option[Array[Byte]] = None): RawHeader = RawHeader(
    wwwAuthenticate,
    negotiate + maybeServerToken.map(" " + new Base64(0).encodeToString(_)).getOrElse("")
  )

  private def kerberosCore(clientToken: Array[Byte]): Either[Rejection, Token] = {
    try {
      val (maybeServerToken, maybeToken) = Subject.doAs(loginContext.getSubject, new PrivilegedExceptionAction[(Option[Array[Byte]], Option[Token])] {
        override def run: (Option[Array[Byte]], Option[Token]) = {
          val gssContext = gssManager.createContext(null: GSSCredential)
          try {
            println("@@@@@@@@@@@@@@@@@@@@ client token " + clientToken)
            (
              Option(gssContext.acceptSecContext(clientToken, 0, clientToken.length)),
              if (gssContext.isEstablished) Some(tokens.create(gssContext.getSrcName.toString)) else None
              )
          } catch {
            case e: Throwable =>
              log.error(e, "error in establishing security context")
              throw e
          } finally {
            gssContext.dispose()
          }
        }
      })
      if (log.isDebugEnabled)
        log.debug("maybeServerToken {} maybeToken {}", maybeServerToken.map(new Base64(0).encodeToString(_)), maybeToken)
      maybeToken.map { token =>
        log.debug("received new token")
        Right(token)
      }.getOrElse {
        log.debug("no token received but if there is a serverToken then negotiations are ongoing")
        Left(AuthenticationFailedRejection("CredentialsMissing", List(challengeHeader(maybeServerToken))))
      }
    } catch {
      case e: PrivilegedActionException => e.getException match {
        case e: IOException => throw e // server error
        case e: Throwable =>
          log.error(e, "negotiation failed")
          Left(AuthenticationFailedRejection("CredentialsRejected", List(challengeHeader()))) // rejected
      }
    }
  }

  private def kerberosNegotiate(ctx: HttpServletRequest): Option[Either[Rejection, Token]] = clientToken(ctx).map(kerberosCore)

  private def initiateNegotiations: Either[Rejection, Token] = {
    log.debug("no negotiation header found, initiating negotiations")
    Left(AuthenticationFailedRejection("CredentialsMissing", List(challengeHeader())))
  }

  def auth(ctx: HttpServletRequest, response: HttpServletResponse): Future[HttpServletResponse] = Future {
    val resp: Either[Rejection, Token] = cookieToken(ctx).orElse(kerberosNegotiate(ctx)).getOrElse(initiateNegotiations)
    resp match {
      case Left(rej) => response.setHeader("WWW-Authenticate", "negotiate realm=\"%s\"" format rej)
        response.sendError(401, "Unauthenticated")
        response.setStatus(401)
        response
      case Right(token) =>
        val cookie = new Cookie(cookieName, tokens.serialize(token))
        cookie.setDomain(domain.getOrElse(""))
        cookie.setPath(path.getOrElse(""))
        response.addCookie(cookie)
        response.setStatus(200)
        response
    }
  }

  //def setSpnegoCookie(token: Token): Directive0 = setCookie(HttpCookie(cookieName, tokens.serialize(token), domain = domain, path = path))
}

