import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

import { coursePage } from "@pages/CoursePage";


When("I view my list of courses", () => {
  cy.visit("/courses");
});

Then("I can edit a course successfully", () => {
  coursePage.editCourse();
});
