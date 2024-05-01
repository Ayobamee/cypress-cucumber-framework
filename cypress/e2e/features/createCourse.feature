Feature: Create course successfully

    Background:
        Given A user logged into the Quales App
    Scenario:  Create Course
        When I click the Add Course button
        Then I can create a course successfully
