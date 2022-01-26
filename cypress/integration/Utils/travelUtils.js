/// <reference types="cypress" />

const baseURL = "https://www.instagram.com/";
const userURL = "https://www.instagram.com/accountforqa/"

function visitInstagram() {
  cy.visit(baseURL).wait(100);
}

function visitUser() {
  cy.visit(userURL)
}

export default { visitInstagram, visitUser };
