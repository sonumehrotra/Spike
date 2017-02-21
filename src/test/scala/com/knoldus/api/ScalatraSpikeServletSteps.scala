package com.knoldus.api

import org.scalatra.test.specs2._

// For more on Specs2, see http://etorreborre.github.com/specs2/guide/org.specs2.guide.QuickStart.html
class ScalatraSpikeServletSteps extends ScalatraSpec {def is =
    "GET / on HelloWorldServlet" ^
      "return status 200" ! getRoot200 ^
      end

  addServlet(classOf[ScalatraSpikeServlet], "/*")

  def getRoot200 = get(uri = s"/get/1", headers = Map("Authorization" ->"Basic c2NhbGF0cmE6c2NhbGF0cmE=")) {
    status must_== 200
  }
}
