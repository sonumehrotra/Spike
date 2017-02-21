package com.knoldus.api

import akka.actor.{ActorSystem, Props}
import com.knoldus.amps.Publisher
import com.knoldus.auth.scalatra.{AuthenticationSupport, User}
import com.knoldus.persistence.PlainSQLHelper
import com.knoldus.persistence.PlainSQLHelper.UserDetails
import com.typesafe.config.ConfigFactory
import org.ietf.jgss.GSSException
import org.scalatra.{AsyncResult, CorsSupport, FutureSupport}

import scala.concurrent.{ExecutionContext, Future}

class ScalatraSpikeServlet extends ScalatraSpikeServer with AuthenticationSupport with FutureSupport with CorsSupport {
  implicit protected def executor: ExecutionContext = ExecutionContext.global


  val system = ActorSystem("PersistentActorExample")
  val persistentActor = system.actorOf(Props[EventPersistentActor], "persistentActor-4-scala")

  val configuration = ConfigFactory.load("application.conf")

  private val AMPS_CLIENT_NAME = configuration.getString("amps.client_name")

  private val AMPS_SERVER_URL = configuration.getString("amps.server_url")

  /** Acquires AMPS Client with given Credentials */

  val ampsClient = Publisher
    .getPublisherClient(AMPS_CLIENT_NAME, AMPS_SERVER_URL)

  val plainSQLHelper = PlainSQLHelper


  val user = User("12345")

  options("/*"){
    response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
  }


  get("/get/:id") {
    basicAuth
    params.get("id") match {
      case Some(id) => {
        ampsClient.publish("messages", s"""{ "message" : "Hello ${user.id}!" }""")
        persistentActor ! s"Getting details for id $id"
        new AsyncResult() {
          override val is: Future[String] = plainSQLHelper.getDetailsForId(id.toInt)
        }
      }
      case None => Future("Invalid user Id")
    }
  }

  put("/update") {
    basicAuth.map { user =>
      val id = params.get("id").getOrElse("0").toInt
      val name = params.get("name").getOrElse("")
      val gender = params.get("gender").getOrElse("")
      val age = params.get("age").getOrElse("0").toInt
      ampsClient.publish("messages", s"""{ "message" : "Hello ${user.id}!" }""")
      persistentActor ! "print"
      new AsyncResult() {
        override val is: Future[String] = plainSQLHelper.updateUserDetails(UserDetails(id, name, gender, age))
      }
    }.getOrElse("Delete Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  post("/insert") {
    basicAuth.map { user =>
      val id = params.get("id").getOrElse("0").toInt
      val name = params.get("name").getOrElse("")
      val gender = params.get("gender").getOrElse("")
      val age = params.get("age").getOrElse("0").toInt
      ampsClient.publish("messages", s"""{ "message" : "Hello, Post from ${user.id}!" }""")
      persistentActor ! Command(UserDetails(id, name, gender, age))
      new AsyncResult() {
        override val is: Future[String] = plainSQLHelper.insertUsersDetails(UserDetails(id, name, gender, age))
      }
    }.getOrElse("Post Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  delete("/delete/:id") {
    basicAuth.map { user =>
      params.get("id") match {
        case Some(id) => {
          ampsClient.publish("messages", s"""{ "message" : "Hello $id!" }""")
          persistentActor ! s"Deleting for id $id"
          new AsyncResult() {
            override val is: Future[String] = plainSQLHelper.deleteUserDetails(id.toInt)
          }
        }
        case None => Future("Invalid user Id")
      }
    }.getOrElse("Delete Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

}
