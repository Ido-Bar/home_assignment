/// <reference types="cypress" />

class accountPage {
  videoSelector = "video[type='video/mp4']";
  $videoSelector = "$('video[type='video/mp4']'')";
  commentButtonSelector = "span[class='_15y0l'] button[type='button']";
  postButtonSelector = "button[type='submit']";
  commentTabSelector = ".Mr508 ";
  replyButtonSelector = ".FH9sR";
  likeButtonSelector = ".fr66n > .wpO6b";
  $likeButtonSelector = "$('span[class='fr66n'] button[type='button']'')";
  commentTextFieldSelector = ".Ypffh";

  checkIfVideoRuns() {
    cy.get(this.videoSelector).wait(100).should("have.prop", "paused", false);
  }

  stopVideo() {
    cy.get(this.videoSelector).then(($videoSelector) => {
      $videoSelector[0].pause();
    });
  }

  checkIfVideoStopped() {
    cy.get(this.videoSelector).wait(100).should("have.prop", "paused", true);
  }

  postComment() {
    cy.get(this.commentButtonSelector)
      .click()
      .wait(3000)
      .type("this is an automated comment");
    cy.get(this.postButtonSelector).click();
  }

  replyComment() {
    cy.get(this.commentTabSelector)
      .first()
      .find(this.replyButtonSelector)
      .eq(1)
      .click({ force: true });
    cy.get(this.commentButtonSelector)
      .click()
      .wait(3000)
      .type("this is an automated reply");
    cy.get(this.commentTextFieldSelector)
    .should("contain.text","this is an automated reply");
    cy.get(this.postButtonSelector)
    .click();
  }

  setLikeButtonTrue() {
    cy.get(this.likeButtonSelector).then(($likeButtonSelector) => {
      if ($likeButtonSelector.should(!"have.prop", "null")) {
        cy.get(this.likeButtonSelector).click();
      }
    });
  }
}

export default accountPage;
