class LoginPage {
  elements = {
    signInBtn: () => cy.contains("Sign In"),
    usernameInput: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInput: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.get(".MuiButton-contained"),
    errorMessage: () =>
      cy.contains(
        "Password must be 8 characters with at least one letter and one digit"
      ),
    errorMessage: () => cy.contains("Invalid Login Credential"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin() {
    this.elements.signInBtn().click();
    this.elements.usernameInput().type(Cypress.env("USERNAME"));
    this.elements.passwordInput().type(Cypress.env("PASSWORD"));
    this.elements.loginBtn().click();
  }

  submitLoginWithIncorrectCredentials() {
    this.elements.signInBtn().click();
    this.elements.usernameInput().type(Cypress.env("WRONGUSERNAME"));
    this.elements.passwordInput().type(Cypress.env("PASSWORD"));
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();
