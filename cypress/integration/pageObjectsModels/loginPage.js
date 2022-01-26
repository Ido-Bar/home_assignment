/// <reference types="cypress" />

class loginPage {
  usernameField = "input[name='username']";
  passwordField = "input[name='password']";
  loginButton = "button[type='submit'] div";
  notNowButton = "div[class='cmbtv'] button[type='button']";
  loginError = "[data-testid='login-error-message']"

  enterUsername(usernameText) {
    cy.get(this.usernameField).type(usernameText);
  }

  enterPassword(passwordText) {
    cy.get(this.passwordField).type(passwordText);
  }

  clickLogIn() {
    cy.get(this.loginButton).click().wait(2000).should("not.exist");
  }

  checkForLoginError() {
    cy.get(this.loginError).should("not.exist");
  }

  clickNotNow() {
    cy.get(this.notNowButton).click();
  }
}

export default loginPage;
