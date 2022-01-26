/// <reference types="cypress" />

class homePage {
  accountButtonSelector = ".gmFkV";
  homePageButtonSelector = ".J5g42 > :nth-child(1) > div > a > ._8-yf5 > path";
  accountLogoButtonSelector = "//span[contains(@class,'_2dbep qNELH')]";
  logOutButtonSelector = ":nth-child(6) > .rBNOH";
  loginButtonSelector = ".aOOlW";
  toolBarSelector = ".J5g42";

  checkAccount(username) {
    cy.get(this.accountButtonSelector).wait(200).should("have.text", username);
  }

  clickAccountLogoButton() {
    cy.get(this.toolBarSelector).find(this.accountButtonSelector).click();
  } 

  clickAccountLogOut() {
    cy.get(this.logOutButtonSelector).click();
  }

  goToHome() {
    cy.get(this.homePageButtonSelector).click();
  }

  clickReLogin() {
    cy.get(this.loginButtonSelector).click();
  }
}

export default homePage;
