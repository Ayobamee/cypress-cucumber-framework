import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A user is at the quales edu library login page", () => {
  cy.visit("/");
});

When(
  "A user enters the username the password and clicks on the login button",
  () => {
    loginPage.submitLogin();
  }
);

When(
  "A user provides incorrect credentials, and clicks on the login button",
  () => {
    loginPage.submitLoginWithIncorrectCredentials();
  }
);
Then("The url will contains the quales library", () => {
  cy.url().should("contains", "/courses");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});

Then("The message {string} is displayed", () => {
  loginPage.elements.errorMessage().should("be.visible");
});
