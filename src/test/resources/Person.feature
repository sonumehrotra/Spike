Feature: CRUD with Person table
  In order to avoid making mistakes
  As a developer
  I want to check the login

  Scenario: Check post request for login
    Given my server is running
    When I hit on route post with value "insert?id=11&name=AA&age=20&gender=male"
    Then the response should be "User details inserted successufully"

  Scenario: Check get request for login
    Given my server is running
    When I hit on route get with value "get/11"
    Then the response should be "Id: 11, Name: AA, Gender: male, Age: 20"


  Scenario: Check put request for login
    Given my server is running
    When I hit on route put with value "update?id=11&name=AA&age=20&gender=male"
    Then the response should be "User details updated successufully"

  Scenario: Check delete request for login
    Given my server is running
    When I hit on route delete with value "delete/11"
    Then the response should be "User details deleted successufully"
