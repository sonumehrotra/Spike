package com.knoldus.api

import akka.actor.{ActorSystem, Props}

class MyScalatraServlet extends MyfirstscalatraStack {
  val system = ActorSystem("example")
  val persistentActor = system.actorOf(Props[ExamplePersistentActor], "persistentActor-4-scala")
  get("/get") {
    persistentActor ! "print"
  }

  put("/put") {
    persistentActor ! Cmd("put")
    "put"

  }

  post("/post") {
    persistentActor ! Cmd("post")
    persistentActor ! "snap"
    "snap"

  }

  delete("/delete") {
    persistentActor ! Cmd("delete")
    persistentActor ! "print"
    "print"
  }

}
