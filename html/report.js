$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Person.feature");
formatter.feature({
  "line": 1,
  "name": "CRUD with Person table",
  "description": "In order to avoid making mistakes\nAs a developer\nI want to check the login",
  "id": "crud-with-person-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Check post request for login",
  "description": "",
  "id": "crud-with-person-table;check-post-request-for-login",
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
  "name": "I hit on route post with value \"insert?id\u003d11\u0026name\u003dAA\u0026age\u003d20\u0026gender\u003dmale\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the response should be \"User details inserted successufully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonSteps.scala:21"
});
formatter.result({
  "duration": 1168943242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "insert?id\u003d11\u0026name\u003dAA\u0026age\u003d20\u0026gender\u003dmale",
      "offset": 32
    }
  ],
  "location": "PersonSteps.scala:40"
});
formatter.result({
  "duration": 21625312191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User details inserted successufully",
      "offset": 24
    }
  ],
  "location": "PersonSteps.scala:56"
});
formatter.result({
  "duration": 54529934,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check get request for login",
  "description": "",
  "id": "crud-with-person-table;check-get-request-for-login",
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
  "name": "I hit on route get with value \"get/11\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the response should be \"Id: 11, Name: AA, Gender: male, Age: 20\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonSteps.scala:21"
});
formatter.result({
  "duration": 42356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get/11",
      "offset": 31
    }
  ],
  "location": "PersonSteps.scala:24"
});
formatter.result({
  "duration": 12197000897,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Id: 11, Name: AA, Gender: male, Age: 20",
      "offset": 24
    }
  ],
  "location": "PersonSteps.scala:56"
});
formatter.result({
  "duration": 79403,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check put request for login",
  "description": "",
  "id": "crud-with-person-table;check-put-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I hit on route put with value \"update?id\u003d11\u0026name\u003dAA\u0026age\u003d20\u0026gender\u003dmale\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the response should be \"User details updated successufully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonSteps.scala:21"
});
formatter.result({
  "duration": 18949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update?id\u003d11\u0026name\u003dAA\u0026age\u003d20\u0026gender\u003dmale",
      "offset": 31
    }
  ],
  "location": "PersonSteps.scala:32"
});
formatter.result({
  "duration": 12166435412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User details updated successufully",
      "offset": 24
    }
  ],
  "location": "PersonSteps.scala:56"
});
formatter.result({
  "duration": 227773,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Check delete request for login",
  "description": "",
  "id": "crud-with-person-table;check-delete-request-for-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I hit on route delete with value \"delete/11\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the response should be \"User details deleted successufully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PersonSteps.scala:21"
});
formatter.result({
  "duration": 83706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete/11",
      "offset": 34
    }
  ],
  "location": "PersonSteps.scala:48"
});
formatter.result({
  "duration": 12061790223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User details deleted successufully",
      "offset": 24
    }
  ],
  "location": "PersonSteps.scala:56"
});
formatter.result({
  "duration": 138232,
  "status": "passed"
});
});