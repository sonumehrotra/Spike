Feature: Login
  In order to avoid making mistakes
  As a developer
I want to check the login

Scenario: Check get request for login
  Given my server is running
  When I hit on route get with value "get"
  Then the response should be "Hello World"

  Scenario: Check post request for login
    Given my server is running
    When I hit on route post with value "post"
    Then the response should be "Hello World"

  Scenario: Check put request for login
    Given my server is running
    When I hit on route put with value "put"
    Then the response should be "Hello World"

  Scenario: Check delete request for login
    Given my server is running
    When I hit on route delete with value "delete"
    Then the response should be "Hello World"
