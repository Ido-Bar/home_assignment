/// <reference types="cypress" />

class homePage {
  accountButtonSelector = ".gmFkV";

  checkAccount(username) {
    cy.get(this.accountButtonSelector).wait(200).should("have.text", username);
  }
}

export default homePage;
