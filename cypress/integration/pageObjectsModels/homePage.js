/// <reference types="cypress" />

class homePage {
  accountButton = ".gmFkV";

  checkAccount(username) {
    cy.get(this.accountButton).should("have.text", username);
  }
}

export default homePage;
