/// <reference types="cypress" />

class homePage {
  accountButton = ".gmFkV";
  homePageButton = ".J5g42 > :nth-child(1) > div > a > ._8-yf5 > path";
  accountButton = "._2dbep.qNELH";
  logOutButton = ":nth-child(6) > .rBNOH";
  loginButton = ".aOOlW";

  checkAccount(username) {
    cy.get(this.accountButton).should("have.text", username);
  }

  clickAccountLogoButton() {
    cy.get(this.accountButton).click();
  } 

  clickAccountLogOut() {
    cy.get(this.logOutButton).click();
  }

  goToHome() {
    cy.get(this.homePageButton).click();
  }

  clickReLogin() {
    cy.get(this.loginButton).click();
  }
}

export default homePage;
