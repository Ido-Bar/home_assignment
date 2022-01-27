/// <reference types="cypress" />

class accountPage {
  videosTabSelector = "a[class='_9VEo1 '] span[class='PJXu4']";
  firstVideoSelector = "[href='/tv/CZMHKClrvej/'] > .A-NpN > .JB3Yj > .T1pqg > .qn-0x > .o53Uu";

  clickVideosTab() {
    cy.get(this.videosTabSelector).click();
  }

  clickOnFirstVideo() {
    cy.get(this.firstVideoSelector).click({ force: true });
  }
}

export default accountPage;
