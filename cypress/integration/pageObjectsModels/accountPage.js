/// <reference types="cypress" />

class accountPage {
  videosTab = "a[class='_9VEo1 '] span[class='PJXu4']";
  firstVideo = "[href='/tv/CZMHKClrvej/'] > .A-NpN > .JB3Yj > .T1pqg > .qn-0x > .o53Uu";
  video = "video[type='video/mp4']";

  clickVideosTab() {
    cy.get(this.videosTab).click();
  }

  clickOnFirstVideo() {
    cy.get(this.firstVideo).click();
  }

  checkIfVideoRuns() {
    cy.get(this.video).should("have.prop", "paused", false);
  }
}

export default accountPage;
