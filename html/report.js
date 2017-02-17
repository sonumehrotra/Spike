$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "In order to avoid making mistakes\nAs a developer\nI want to check the login",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Check get request for login",
  "description": "",
  "id": "login;check-get-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hit on route get with value \"get\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the response should be \"Hello World\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.scala:21"
});
formatter.result({
  "duration": 236168614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 31
    }
  ],
  "location": "LoginSteps.scala:24"
});
formatter.result({
  "duration": 1617741538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 24
    }
  ],
  "location": "LoginSteps.scala:56"
});
formatter.result({
  "duration": 18014985,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check post request for login",
  "description": "",
  "id": "login;check-post-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I hit on route post with value \"post\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the response should be \"Hello World\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.scala:21"
});
formatter.result({
  "duration": 15482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 32
    }
  ],
  "location": "LoginSteps.scala:40"
});
formatter.result({
  "duration": 31781213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 24
    }
  ],
  "location": "LoginSteps.scala:56"
});
formatter.result({
  "duration": 273483585,
  "error_message": "org.scalatest.exceptions.TestFailedException: \"[Bad Request]\" did not equal \"[Hello World]\"\n\tat org.scalatest.MatchersHelper$.indicateFailure(MatchersHelper.scala:340)\n\tat org.scalatest.Matchers$AnyShouldWrapper.shouldEqual(Matchers.scala:6742)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:61)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:56)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:98)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:96)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.execute(CucumberFeatureRunner.scala:107)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply$mcV$sp(CucumberFeatureRunner.scala:67)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat scala.util.Try$.apply(Try.scala:192)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.run(CucumberFeatureRunner.scala:58)\n\tat sbt.RunnerWrapper$1.runRunner2(FrameworkWrapper.java:223)\n\tat sbt.RunnerWrapper$1.execute(FrameworkWrapper.java:236)\n\tat sbt.TestRunner.runTest$1(TestFramework.scala:76)\n\tat sbt.TestRunner.run(TestFramework.scala:85)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$.sbt$TestFramework$$withContextLoader(TestFramework.scala:185)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFunction.apply(TestFramework.scala:207)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$4.work(System.scala:63)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.ErrorHandling$.wideConvert(ErrorHandling.scala:17)\n\tat sbt.Execute.work(Execute.scala:237)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.ConcurrentRestrictions$$anon$4$$anonfun$1.apply(ConcurrentRestrictions.scala:159)\n\tat sbt.CompletionService$$anon$2.call(CompletionService.scala:28)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat java.lang.Thread.run(Thread.java:745)\n\tat ✽.Then the response should be \"Hello World\"(Login.feature:14)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "Check put request for login",
  "description": "",
  "id": "login;check-put-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I hit on route put with value \"put\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response should be \"Hello World\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.scala:21"
});
formatter.result({
  "duration": 31034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "put",
      "offset": 31
    }
  ],
  "location": "LoginSteps.scala:32"
});
formatter.result({
  "duration": 12136037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 24
    }
  ],
  "location": "LoginSteps.scala:56"
});
formatter.result({
  "duration": 492028,
  "error_message": "org.scalatest.exceptions.TestFailedException: \"[Bad Request]\" did not equal \"[Hello World]\"\n\tat org.scalatest.MatchersHelper$.indicateFailure(MatchersHelper.scala:340)\n\tat org.scalatest.Matchers$AnyShouldWrapper.shouldEqual(Matchers.scala:6742)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:61)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:56)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:98)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:96)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.execute(CucumberFeatureRunner.scala:107)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply$mcV$sp(CucumberFeatureRunner.scala:67)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat scala.util.Try$.apply(Try.scala:192)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.run(CucumberFeatureRunner.scala:58)\n\tat sbt.RunnerWrapper$1.runRunner2(FrameworkWrapper.java:223)\n\tat sbt.RunnerWrapper$1.execute(FrameworkWrapper.java:236)\n\tat sbt.TestRunner.runTest$1(TestFramework.scala:76)\n\tat sbt.TestRunner.run(TestFramework.scala:85)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$.sbt$TestFramework$$withContextLoader(TestFramework.scala:185)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFunction.apply(TestFramework.scala:207)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$4.work(System.scala:63)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.ErrorHandling$.wideConvert(ErrorHandling.scala:17)\n\tat sbt.Execute.work(Execute.scala:237)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.ConcurrentRestrictions$$anon$4$$anonfun$1.apply(ConcurrentRestrictions.scala:159)\n\tat sbt.CompletionService$$anon$2.call(CompletionService.scala:28)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat java.lang.Thread.run(Thread.java:745)\n\tat ✽.Then the response should be \"Hello World\"(Login.feature:19)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 21,
  "name": "Check delete request for login",
  "description": "",
  "id": "login;check-delete-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I hit on route delete with value \"delete\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the response should be \"Hello World\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.scala:21"
});
formatter.result({
  "duration": 60924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 34
    }
  ],
  "location": "LoginSteps.scala:48"
});
formatter.result({
  "duration": 20258505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 24
    }
  ],
  "location": "LoginSteps.scala:56"
});
formatter.result({
  "duration": 583374,
  "error_message": "org.scalatest.exceptions.TestFailedException: \"[Bad Request]\" did not equal \"[Hello World]\"\n\tat org.scalatest.MatchersHelper$.indicateFailure(MatchersHelper.scala:340)\n\tat org.scalatest.Matchers$AnyShouldWrapper.shouldEqual(Matchers.scala:6742)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:61)\n\tat com.knoldus.login.LoginSteps$$anonfun$6.apply(LoginSteps.scala:56)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:98)\n\tat cucumber.api.scala.ScalaDsl$StepBody$$anonfun$apply$2.applyOrElse(ScalaDsl.scala:96)\n\tat scala.runtime.AbstractPartialFunction.apply(AbstractPartialFunction.scala:36)\n\tat cucumber.runtime.scala.ScalaStepDefinition.execute(ScalaStepDefinition.scala:71)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.runtime.Runtime.run(Runtime.java:122)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.execute(CucumberFeatureRunner.scala:107)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply$mcV$sp(CucumberFeatureRunner.scala:67)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner$$anonfun$run$1.apply(CucumberFeatureRunner.scala:58)\n\tat scala.util.Try$.apply(Try.scala:192)\n\tat com.waioeka.sbt.runner.CucumberFeatureRunner.run(CucumberFeatureRunner.scala:58)\n\tat sbt.RunnerWrapper$1.runRunner2(FrameworkWrapper.java:223)\n\tat sbt.RunnerWrapper$1.execute(FrameworkWrapper.java:236)\n\tat sbt.TestRunner.runTest$1(TestFramework.scala:76)\n\tat sbt.TestRunner.run(TestFramework.scala:85)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1$$anonfun$apply$8.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$.sbt$TestFramework$$withContextLoader(TestFramework.scala:185)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFramework$$anon$2$$anonfun$$init$$1.apply(TestFramework.scala:202)\n\tat sbt.TestFunction.apply(TestFramework.scala:207)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.Tests$$anonfun$9.apply(Tests.scala:216)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$3$$anonfun$apply$2.apply(System.scala:44)\n\tat sbt.std.Transform$$anon$4.work(System.scala:63)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1$$anonfun$apply$1.apply(Execute.scala:228)\n\tat sbt.ErrorHandling$.wideConvert(ErrorHandling.scala:17)\n\tat sbt.Execute.work(Execute.scala:237)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.Execute$$anonfun$submit$1.apply(Execute.scala:228)\n\tat sbt.ConcurrentRestrictions$$anon$4$$anonfun$1.apply(ConcurrentRestrictions.scala:159)\n\tat sbt.CompletionService$$anon$2.call(CompletionService.scala:28)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat java.lang.Thread.run(Thread.java:745)\n\tat ✽.Then the response should be \"Hello World\"(Login.feature:24)\n",
  "status": "failed"
});
});