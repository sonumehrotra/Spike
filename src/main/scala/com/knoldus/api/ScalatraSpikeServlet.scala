package com.knoldus.api

import javax.servlet.http.{HttpServletRequest, HttpServletResponse}

import akka.actor.{ActorRef, ActorLogging, ActorSystem, Props}
import akka.event.{Logging, LoggingAdapter}
import com.knoldus.amps.Publisher
import com.knoldus.auth.kerberos.SpnegoAuthenticator
import com.knoldus.auth.scalatra.{AuthenticationSupport, User}
import com.typesafe.config.ConfigFactory
import org.ietf.jgss.GSSException
import org.scalatra.FutureSupport

import scala.concurrent.{ExecutionContext, Future}

class ScalatraSpikeServlet extends ScalatraSpikeServer with AuthenticationSupport with  FutureSupport {

  val system = ActorSystem("PersistentActorExample")
  val persistentActor: ActorRef = system.actorOf(Props[EventPersistentActor], "persistentActor-4-scala")

  val configuration = ConfigFactory.load("application.conf")
  protected implicit def executor = ExecutionContext.global
  implicit val log: LoggingAdapter= Logging.getLogger(system, persistentActor)

  private val AMPS_CLIENT_NAME = configuration.getString("amps.client_name")

  private val AMPS_SERVER_URL = configuration.getString("amps.server_url")

  /** Acquires AMPS Client with given Credentials */

  val ampsClient = Publisher
    .getPublisherClient(AMPS_CLIENT_NAME, AMPS_SERVER_URL)

  val authenticator = SpnegoAuthenticator.apply()

  def authenticate(spnegoAuthenticator: SpnegoAuthenticator)(implicit request: HttpServletRequest, response: HttpServletResponse): Future[HttpServletResponse] = {
    println("RememberMeStrategy: attempting authentication")
    spnegoAuthenticator.auth(request,response)
  }


  val user = User("12345")

  get("/get") {
    authenticate(authenticator).map{s=>
      /** Publish a message with topic 'messages' */
      ampsClient.publish("messages", s"""{ "message" : "Hello ${user.id}!" }""")
      persistentActor ! "print"

      "Hello World" + s.getStatus
    }
    }

  put("/put") {
    basicAuth.map { user =>

      /** Publish a message to AMPS server on topic 'messages' */
      ampsClient.publish("messages", s"""{ "message" : "Hello, Put from ${user.id}!" }""")
      persistentActor ! Command("put")
      "put"
      "Hello World"
    }.getOrElse("Put Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  post("/post") {
    basicAuth.map { user =>
      ampsClient.publish("messages", s"""{ "message" : "Hello, Post from ${user.id}!" }""")
      persistentActor ! Command("post")
      persistentActor ! "snap"
      "snap"
      "Hello World"
    }.getOrElse("Post Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  delete("/delete") {
    basicAuth.map { user =>
      ampsClient.publish("messages", s"""{ "message" : "Hello, Deleted ${user.id} !" }""")
      persistentActor ! Command("delete")
      persistentActor ! "print"
      "print"
      "Hello World"
    }.getOrElse("Delete Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

}
