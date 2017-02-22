/*
package com.knoldus.auth.kerberos

import scala.concurrent.ExecutionContext

class SpnegoAuthenticatorMagnet(spnego: SpnegoAuthenticator)(implicit ec: ExecutionContext) 
    extends AuthMagnet[Token](extract(spnego).flatMap(onSuccess(_))) {
  override val directive: Directive1[Token] = extract(spnego).flatMap(onSuccess(_)).flatMap{
    case Left(rejection) => reject(rejection)
    case Right(token) => provide(token) & spnego.setSpnegoCookie(token)
  }
}

object SpnegoAuthenticatorMagnet {
  implicit def fromSpnegoAuthenticator(spnego: SpnegoAuthenticator)(implicit ec: ExecutionContext): AuthMagnet[Token] =
    new SpnegoAuthenticatorMagnet(spnego)
}
*/
