import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { landingPage } from "@pages/LandingPage";
import { coursePage } from "@pages/CoursePage";

Given("A user logged into the Quales App", () => {
  cy.visit("/");
  loginPage.submitLogin();
});

When("I click the Add Course button", () => {
  landingPage.clickAddCourse();
});

Then("I can create a course successfully", () => {
  cy.fixture("testData").then((courseInfo) => {
    const testDataInfo = courseInfo.CourseInformation;
    coursePage.fillCourseForm(
      testDataInfo.courseTitle,
      testDataInfo.courseDescription,
      testDataInfo.address
    );
  });
});
