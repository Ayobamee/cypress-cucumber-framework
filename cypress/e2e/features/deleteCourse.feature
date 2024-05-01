Feature: Delete course page

    Background:
        Given A user logged into the Quales App
    Scenario:  Delete Course
        When I view my courses
        Then I can delete a course successfully

