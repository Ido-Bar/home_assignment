/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import accountPage from "../pageObjectsModels/accountPage.js";
import postPage from "../pageObjectsModels/postPage";

describe("loginTest", function () {
  beforeEach(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("Goes to a post and leaves a comment", function () {
    const login = new loginPage();
    const account = new accountPage();
    const post = new postPage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    post.postComment();
  });

  it("Goes to a comment and leaves a reply", function () {
    const login = new loginPage();
    const account = new accountPage();
    const post = new postPage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    post.replyComment();
  });

  it("Goes to a post and leaves a like", function () {
    const login = new loginPage();
    const account = new accountPage();
    const post = new postPage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    post.setLikeButtonTrue();
  });
});
