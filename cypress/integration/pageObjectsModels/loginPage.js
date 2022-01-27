/// <reference types="cypress" />

class loginPage {
  usernameFieldSelector = "input[name='username']";
  passwordFieldSelector = "input[name='password']";
  loginButtonSelector = "button[type='submit'] div";
  notNowButtonSelector = "div[class='cmbtv'] button[type='button']";
  loginErrorSelector = "[data-testid='login-error-message']";

  enterUsername(usernameText) {
    cy.get(this.usernameFieldSelector).type(usernameText);
  }

  enterPassword(passwordText) {
    cy.get(this.passwordFieldSelector).type(passwordText);
  }

  clickLogIn() {
    cy.get(this.loginButtonSelector).click().wait(2000);
  }

  checkIfLoginErrorIsNotExist() {
    cy.get(this.loginErrorSelector).should("not.exist");
  }

  checkIfLoginErrorExists() {
    cy.get(this.loginErrorSelector).should("exist");
  }

  clickNotNow() {
    cy.get(this.notNowButtonSelector).click();
  }
}

export default loginPage;
