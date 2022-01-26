/// <reference types="cypress" />

const baseURL = "https://www.instagram.com/";

function visitInstagram() {
  cy.visit(baseURL);
}

export default { visitInstagram };
