/// <reference types="cypress" />

class homePage {
  accountButton = ".gmFkV";
  homePageButton = ".J5g42 > :nth-child(1) > div > a > ._8-yf5 > path";
  accountLogoButton = "span[class='_2dbep qNELH']";
  logOutButton = ":nth-child(6) > .rBNOH";
  loginButton = ".aOOlW";

  checkAccount(username) {
    cy.get(this.accountButton).wait(200).should("have.text", username);
  }

  clickAccountLogoButton() {
    cy.get(this.accountLogoButton).click();
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
