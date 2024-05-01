import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import { coursePage } from "@pages/CoursePage";



When("I view my courses", () => {
  cy.visit("/courses");
});

Then("I can delete a course successfully", () => {
  coursePage.deleteCourse();
});
