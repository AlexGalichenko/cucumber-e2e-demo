Feature: Auth

    Background:
        * open "!BASE_URL"
        * page should be "Login"

    @debug
    Scenario: Verify that user is able to login to Clarion
        * type "#USERNAME" to "Username Input"
        * type "#PASSWORD" to "Password Input"
        * click "Login Button"
