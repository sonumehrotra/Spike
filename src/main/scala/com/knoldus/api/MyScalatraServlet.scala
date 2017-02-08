package com.knoldus.api

import org.scalatra._

class MyScalatraServlet extends MyfirstscalatraStack {

  get("/hello") {
   "Hello World"
  }

}
