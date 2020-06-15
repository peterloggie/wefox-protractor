var fs = require("fs");

var loginPage = require("../pages/login");
var navigationBar = require("../pages/navigation");
var dashboardPage = require("../pages/dashboard");
var myContractsPage = require("../pages/myContracts");
var profile = require("../pages/profile");
var profilePage = profile.profilePage;
var personalDetailsPage = profile.personalDetailsPage;


describe('The Wefox assessment workflow', function() {

    let personalDataJSONString = "";

    it('go to the login page', async function() {
        await loginPage.visit();
        expect(browser.driver.getTitle()).toEqual(loginPage.title);
    });

    it('log in with valid credentials', async function() {
        await loginPage.logIn(
            "aqawefox+testtecnico@wefoxgroup.com",
            "qwertyasdf"
        )
        expect(browser.driver.getTitle()).toEqual(dashboardPage.title);
    });

    it('checks for the existence of an agent broker image on the Dashboard', async function() {
        expect(await dashboardPage.getBrokerImage()).toContain("QAlogowefox.png");
    });

    it('go to the "My Contracts" section', async function() {
        await navigationBar.goTo('My Contracts');
        expect(browser.driver.getTitle()).toEqual(myContractsPage.title);
    });

    it('go to the "Profile" section', async function() {
        await navigationBar.goTo('Profile');
        expect(browser.driver.getTitle()).toEqual(profilePage.title);
    });

    it('open the "Personal Details" section', async function() {
        await profilePage.goTo("Personal Details");
        expect(browser.driver.getTitle()).toEqual(personalDetailsPage.title);
    });

    it('save the data in the "Personal Data" section to a json file', async function() {
        var personalData = await personalDetailsPage.getPersonalData();
        personalDataJSONString = JSON.stringify(personalData, null, 4);
        fs.writeFile("personalData.json", personalDataJSONString, function() {});
    });

    it('print the "Personal Data" to the console', async function() {
        console.log(personalDataJSONString);
    });

    it('log out of the private area', async function() {
        await navigationBar.goTo("Log out");
        expect(browser.driver.getTitle()).toEqual(loginPage.title);
    });

});