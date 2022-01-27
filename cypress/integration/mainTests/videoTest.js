/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import accountPage from "../pageObjectsModels/accountPage.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import homePage from "../pageObjectsModels/homePage.js";

describe("videoTest", function () {
  beforeEach(function () {
    cy.fixture("userData").then((data) => {
      this.data = data;
    });
  });

  it("Finds a video and checks if it runs by default", function () {
    const account = new accountPage();
    const login = new loginPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    account.checkIfVideoRuns();
  });

  it("Find a video, checks if it runs by default, then stops the video, then checks if the video is paused", function () {
    const account = new accountPage();
    const login = new loginPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorIsNotExist();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    account.checkIfVideoRuns();
    account.stopVideo();
    account.checkIfVideoStopped();
  });
});
