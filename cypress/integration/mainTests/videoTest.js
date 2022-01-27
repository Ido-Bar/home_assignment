/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import accountPage from "../pageObjectsModels/accountPage.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import postPage from "../pageObjectsModels/postPage";

describe("videoTest", function () {
  beforeEach(function () {
    cy.fixture("userData").then((data) => {
      this.data = data;
    });
  });

  it("Finds a video and checks if it runs by default", function () {
    const account = new accountPage();
    const login = new loginPage();
    const post = new postPage();

    travelUtils.visitInstagram(this.data.baseURL);
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser(this.data.userURL);
    account.clickVideosTab();
    account.clickOnFirstVideo();
    post.checkIfVideoRuns();
  });

  it("Find a video, checks if it runs by default, then stops the video, then checks if the video is paused", function () {
    const account = new accountPage();
    const login = new loginPage();
    const post = new postPage();

    travelUtils.visitInstagram(this.data.baseURL);
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser(this.data.userURL);
    account.clickVideosTab();
    account.clickOnFirstVideo();
    post.checkIfVideoRuns();
    post.stopVideo();
    post.checkIfVideoStopped();
  });
});
