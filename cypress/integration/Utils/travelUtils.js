/// <reference types="cypress" />

function visitInstagram(baseURL) {
  cy.visit(baseURL);
}

function visitUser(userURL) {
  cy.visit(userURL);
}

export default { visitInstagram, visitUser };
