Feature: Login
  In order to avoid making mistakes
  As a developer
I want to check the login

Scenario: Check post request for login
  Given my server is running
  When I hit on route get with value "hello"
  Then the response should be "Hello World"
