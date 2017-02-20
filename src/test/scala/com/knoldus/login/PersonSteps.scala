package com.knoldus.login

import com.knoldus.api.ScalatraSpikeServlet
import com.waioeka.sbt.runner.CucumberRunner
import cucumber.api.PendingException
import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.{Matchers, WordSpec}
import org.scalatest.FunSuiteLike
import org.scalatra.test.scalatest._

class CucumberTestSuite extends CucumberRunner

class PersonSteps extends EN with ScalaDsl with ScalatraSuite {

  addServlet(classOf[ScalatraSpikeServlet], "/*")
  var result: (Int, String) = _

  start()


  Given("""^my server is running$""") { () =>
  }

  When("""^I hit on route get with value "([^"]*)"$""") { (arg0: String) =>
    result = get(uri = s"/$arg0", headers = Map("Authorization" ->"Basic c2NhbGF0cmE6c2NhbGF0cmE=")) {
      val stat = status
      val b = body
      (stat, b)
    }
  }

  When("""^I hit on route put with value "([^"]*)"$""") { (arg0: String) =>
    result = put(s"/$arg0", headers = Map("Authorization" ->"Basic c2NhbGF0cmE6c2NhbGF0cmE=")) {
      val stat = status
      val b = body
      (stat, b)
    }
  }

  When("""^I hit on route post with value "([^"]*)"$""") { (arg0: String) =>
    result = post(s"/$arg0", headers = Map("Authorization" ->"Basic c2NhbGF0cmE6c2NhbGF0cmE=")) {
      val stat = status
      val b = body
      (stat, b)
    }
  }

  When("""^I hit on route delete with value "([^"]*)"$""") { (arg0: String) =>
    result = delete(s"/$arg0", headers = Map("Authorization" ->"Basic c2NhbGF0cmE6c2NhbGF0cmE=")) {
      val stat = status
      val b = body
      (stat, b)
    }
  }

  Then("""^the response should be "([^"]*)"$""") { (arg0: String) =>
    result._2 shouldEqual (arg0)
  }


}
