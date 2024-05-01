Feature:  Feature Login Page work flow works appropriately.


    Background:
        Given A user is at the quales edu library login page
    Scenario: Success Login
        When A user enters the username the password and clicks on the login button
        Then The url will contains the quales library
    Scenario: Incorrect Login Credentials
        When A user provides incorrect credentials, and clicks on the login button
        Then The message "Invalid Login Credential" is displayed
