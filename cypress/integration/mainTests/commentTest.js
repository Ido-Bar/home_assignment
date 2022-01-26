/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import homePage from "../pageObjectsModels/homePage.js";
import accountPage from "../pageObjectsModels/accountPage.js";

describe("loginTest", function () {
  before(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("signs into a Instagram account and makes sure that the login was successful", function () {
    const login = new loginPage();
    const account = new accountPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkForLoginError();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    account.commentTheVideo();
    account.goToPreviousPage();
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  });
});