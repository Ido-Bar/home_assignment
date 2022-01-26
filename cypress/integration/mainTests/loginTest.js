/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import homePage from "../pageObjectsModels/homePage.js";

describe("loginTest", function () {
  before(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("signs into a Instagram account and makes sure that the login was successful", function () {
    const login = new loginPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkForLoginError();
    login.clickNotNow();
    home.checkAccount(this.data.username);
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  });

  it("Signs into an instagram account with the wrong username and checks if login was successful", function () {
    const login = new loginPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.wrongUsername);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.checkForLoginError();
    login.clickNotNow();
    home.checkAccount(this.data.username);
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  })
  
  it("Signs into an Instagram account with the wrong password and checks if login was successful", function () {
    const login = new loginPage();
    const home = new homePage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.WrongPassword);
    login.clickLogIn();
    login.checkForLoginError();
    login.clickNotNow();
    home.checkAccount(this.data.username);
    home.clickAccountLogoButton();
    home.clickAccountLogOut();
    home.clickReLogin();
  })
});
