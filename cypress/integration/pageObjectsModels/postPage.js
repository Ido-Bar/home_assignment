/// <reference types="cypress" />

class accountPage {
    videoSelector = "video[type='video/mp4']";
    $videoSelector = "$('video[type='video/mp4']'')";
    commentButtonSelector = "span[class='_15y0l'] button[type='button']";
    postButtonSelector = "button[type='submit']";
    commentSelector = "ul:nth-child(2)";
    replyButtonSelector = ".FH9sR";
    likeButtonSelector = ".fr66n > .wpO6b";
    $likeButtonSelector = "$(span[class='fr66n'] button[type='button'])";
  
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
      cy.get(this.commentButtonSelector).wait(3000).type("this is an automated comment");
      cy.get(this.postButtonSelector).click();
    }
  
    replyComment() {
      cy.get(this.commentSelector).find(this.replyButtonSelector);
      cy.get(this.commentButtonSelector).wait(3000).type("this is an automated comment");
      cy.get(this.postButtonSelector).click();
    }
  
    checkIfLiked() {
      cy.get(this.likeButtonSelector).then(($likeButtonSelector) => {
        if ($likeButtonSelector.hasClass("disabled")) {
          cy.click().should("have.class", "active");
        }
      });
    }
  }
  
  export default accountPage;