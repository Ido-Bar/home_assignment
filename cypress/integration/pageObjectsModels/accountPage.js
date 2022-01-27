/// <reference types="cypress" />

class accountPage {
  videosTabSelector = "a[class='_9VEo1 '] span[class='PJXu4']";
  firstVideosLineSelector = ".Nnq7C";
  firstVideoSelector = "._bz0w";

  clickVideosTab() {
    cy.get(this.videosTabSelector).last().click({ force: true });
  }

  clickOnFirstVideo() {
    cy.get(this.firstVideosLineSelector)
      .find(this.firstVideoSelector)
      .first()
      .click({ force: true });
  }
}

export default accountPage;
