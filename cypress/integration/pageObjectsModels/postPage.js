/// <reference types="cypress" />

class accountPage {
  videoSelector = "video[type='video/mp4']";
  $videojquery = "$('video[type='video/mp4']'')";
  commentButtonSelector = "span[class='_15y0l'] button[type='button']";
  postButtonSelector = "button[type='submit']";
  commentTabSelector = ".Mr508 ";
  replyButtonSelector = ".FH9sR";
  commentTextFieldSelector = ".Ypffh";

  checkIfVideoRuns() {
    cy.get(this.videoSelector).wait(100).should("have.prop", "paused", false);
  }

  stopVideo() {
    cy.get(this.videoSelector).then(($videojquery) => {
      $videojquery[0].pause();
    });
  }

  checkIfVideoStopped() {
    cy.get(this.videoSelector).wait(100).should("have.prop", "paused", true);
  }

  postComment() {
    cy.get(this.commentButtonSelector)
      .click()
      .wait(3000)
      .type("this is an automated comment")
      .wait(3000);
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
      .type("this is an automated reply")
      .wait(3000);
    cy.get(this.commentTextFieldSelector).should(
      "contain.text",
      "this is an automated reply"
    );
    cy.get(this.postButtonSelector).click();
  }
}

export default accountPage;
