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
  "name": "Check post request for login",
  "description": "",
  "id": "login;check-post-request-for-login",
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
  "name": "I hit on route get with value \"hello\"",
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
  "duration": 298900754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 31
    }
  ],
  "location": "LoginSteps.scala:24"
});
formatter.result({
  "duration": 690030587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello World",
      "offset": 24
    }
  ],
  "location": "LoginSteps.scala:32"
});
formatter.result({
  "duration": 5358444,
  "status": "passed"
});
});