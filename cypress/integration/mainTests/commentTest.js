/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import homePage from "../pageObjectsModels/homePage.js";
import accountPage from "../pageObjectsModels/accountPage.js";

describe("loginTest", function () {
    beforeEach(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("Goes to a video and leaves a like", function () {
    const login = new loginPage();
    const account = new accountPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkIfLoginErrorExists();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    account.checkIfLiked();
    account.goToPreviousPage();
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  });

  it("Goes to a comment and leaves a reply", function () {
    const login = new loginPage();
    const account = new accountPage();
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
    account.replyComment();
    account.goToPreviousPage();
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  });

  it("Goes to a post and leaves a comment", function () {
    const login = new loginPage();
    const account = new accountPage();
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
    account.postComment();
    account.goToPreviousPage();
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  });

});