/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import accountPage from "../pageObjectsModels/accountPage.js";
import loginPage from "../pageObjectsModels/loginPage.js";

describe("videoTest", function () {
  before(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("Finds a video and checks if it runs", function () {
    const account = new accountPage();
    const login = new loginPage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.clickNotNow();
    travelUtils.visitUser();
    account.clickVideosTab();
    account.clickOnFirstVideo();
    account.checkIfVideoRuns();
  });
});
