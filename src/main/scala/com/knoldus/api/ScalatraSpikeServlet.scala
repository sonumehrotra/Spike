package com.knoldus.api

import akka.actor.{ActorSystem, Props}
import com.knoldus.amps.Publisher
import com.knoldus.auth.scalatra.{AuthenticationSupport, User}
import com.typesafe.config.ConfigFactory
import org.ietf.jgss.GSSException

class ScalatraSpikeServlet extends ScalatraSpikeServer with AuthenticationSupport {

  val system = ActorSystem("PersistentActorExample")
  val persistentActor = system.actorOf(Props[EventPersistentActor], "persistentActor-4-scala")

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
    basicAuth
    /** Publish a message with topic 'messages' */
    ampsClient.publish("messages", s"""{ "message" : "Hello ${user.id}!" }""")
    persistentActor ! "print"
  }

  put("/put") {
   basicAuth.map { user =>
     /**Publish a message to AMPS server on topic 'messages' */
     ampsClient.publish("messages", s"""{ "message" : "Hello, Put from ${user.id}!" }""")
     persistentActor ! Command("put")
     "put"
   }.getOrElse( "Put Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  post("/post") {
    basicAuth.map { user =>
      ampsClient.publish("messages", s"""{ "message" : "Hello, Post from ${user.id}!" }""")
      persistentActor ! Command("post")
      persistentActor ! "snap"
      "snap"
    }.getOrElse( "Post Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

  delete("/delete") {
    basicAuth.map { user =>
      ampsClient.publish("messages", s"""{ "message" : "Hello, Deleted ${user.id} !" }""")
      persistentActor ! Command("delete")
      persistentActor ! "print"
      "print"
    }.getOrElse( "Delete Response: You can't use the server " + GSSException.UNAUTHORIZED)
  }

}
