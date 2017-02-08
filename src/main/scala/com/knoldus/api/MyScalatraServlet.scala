package com.knoldus.api

import org.scalatra._

class MyScalatraServlet extends MyfirstscalatraStack {

  get("/get") {
   "Hello World"
  }

  put("/put") {
    "Hello World"
  }

  post("/post") {
    "Hello World"
  }

  delete("/delete") {
    "Hello World"
  }


}
