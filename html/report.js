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
  "duration": 150083388,
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
  "duration": 1522176679,
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
  "duration": 7355526,
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
  "duration": 31791,
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
  "duration": 30560041,
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
  "duration": 141913,
  "status": "passed"
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
  "duration": 52282,
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
  "duration": 15252985,
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
  "duration": 99018,
  "status": "passed"
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
  "duration": 43780,
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
  "duration": 63382695,
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
  "duration": 92977,
  "status": "passed"
});
});