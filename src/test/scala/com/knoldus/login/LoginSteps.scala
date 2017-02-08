package com.knoldus.login

import com.knoldus.api.MyScalatraServlet
import com.waioeka.sbt.runner.CucumberRunner
import cucumber.api.PendingException
import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.{Matchers, WordSpec}
import org.scalatest.FunSuiteLike
import org.scalatra.test.scalatest._

class CucumberTestSuite extends CucumberRunner

class LoginSteps extends EN with ScalaDsl with ScalatraSuite {

  addServlet(classOf[MyScalatraServlet], "/*")
  var result: (Int, String) = _

  start()


  Given("""^my server is running$""") { () =>
  }

  When("""^I hit on route get with value "([^"]*)"$""") { (arg0: String) =>
    result = get(s"/$arg0") {
      val stat = status
      val b = body
      (stat, b)
    }
  }

  Then("""^the response should be "([^"]*)"$""") { (arg0: String) =>
    result._2 shouldEqual (arg0)
  }


}
