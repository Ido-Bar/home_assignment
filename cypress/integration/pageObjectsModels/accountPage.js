/// <reference types="cypress" />

class accountPage {
  videosTab = "a[class='_9VEo1 '] span[class='PJXu4']";
  firstVideo =
    "[href='/tv/CZMHKClrvej/'] > .A-NpN > .JB3Yj > .T1pqg > .qn-0x > .o53Uu";
  video = "video[type='video/mp4']";
  $video = "$('video[type='video/mp4']'')";

  clickVideosTab() {
    cy.get(this.videosTab).click();
  }

  clickOnFirstVideo() {
    cy.get(this.firstVideo).click({ force: true });
  }

  checkIfVideoRuns() {
    cy.get(this.video).wait(100).should("have.prop", "paused", false);
  }

  stopVideo() {
    cy.get(this.video).then(($video) => {
      $video[0].pause();
    });
  }

  goToPreviousPage() {
    cy.go("back");
  }

  checkIfVideoStopped() {
    cy.get(this.video).wait(100).should("have.prop", "paused", true);
  }
}

export default accountPage;
