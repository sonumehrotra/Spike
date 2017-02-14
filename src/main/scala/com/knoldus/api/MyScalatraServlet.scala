package com.knoldus.api

import akka.actor.{ActorSystem, Props}
import com.knoldus.amps.Publisher
import com.knoldus.auth.scalatra.AuthenticationSupport
import com.typesafe.config.ConfigFactory

class MyScalatraServlet extends MyfirstscalatraStack with AuthenticationSupport {

  val system = ActorSystem("PersistentActorExample")
  val persistentActor = system.actorOf(Props[ExamplePersistentActor], "persistentActor-4-scala")

  val configuration = ConfigFactory.load("application.conf")

  private val AMPS_CLIENT_NAME = configuration.getString("amps.client_name")

  private val AMPS_SERVER_URL = configuration.getString("amps.server_url")

  /** Acquires AMPS Client with given Credentials*/
  val ampsClient = Publisher
    .getPublisherClient(AMPS_CLIENT_NAME,AMPS_SERVER_URL)

  get("/*") {
    println("Getting requires!!!!!!!")
    basicAuth
    <html>
      <body>
        <h1>Hello from Scalatra</h1>
        <p>Your token is scalatra</p>
        <p>You are authenticated.</p>
      </body>
    </html>
  }

  get("/get") {
    /** Publish a message with topic 'messages' */
    ampsClient.publish("messages", "{ \"message\" : \"Hello, Get!\" }")
    persistentActor ! "print"
  }

  put("/put") {

    ampsClient.publish("messages", "{ \"message\" : \"Hello, Put!\" }")
    persistentActor ! Cmd("put")
    "put"
  }

  post("/post") {
    ampsClient.publish("messages", "{ \"message\" : \"Hello, Post!\" }")
    persistentActor ! Cmd("post")
    persistentActor ! "snap"
    "snap"

  }

  delete("/delete") {
    ampsClient.publish("messages", "{ \"message\" : \"Hello, Delete!\" }")
    persistentActor ! Cmd("delete")
    persistentActor ! "print"
    "print"
  }

}
