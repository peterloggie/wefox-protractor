var EC = protractor.ExpectedConditions;

class ProfilePage {

    constructor() {
        this.title = "Profile - wefox";
    }

    async goTo(section) {
        var currentTitle = await browser.driver.getTitle()
        var href = section.replace(/\s+/g, '-').toLowerCase();
        var xpath = "//a[@href='/account/" + href + "']"
        await browser.driver.findElement(by.xpath(xpath)).click()
        await browser.wait(EC.not(EC.titleIs(currentTitle), 10000));
    }

};


class PersonalDetailsPage {

    constructor() {
        this.title = "Personal details - wefox";
    }

    async getPersonalData() {
        // not all the elements have IDs, so we locate using the
        // value of their "formcontrol" attribute
        var formControlMap = {
            "First Name": "first_name",
            "Last Name": "last_name",
            "Street and No.": "street",
            "Postal code": "zip_code",
            "City": "city",
            "Date of birth": "birthdate",
            "Email address": "email",
            "Phone number": "phone"
        };
        var personalData = {};

        for (const field in formControlMap) {
            var xpath = "//input[@formcontrolname='" + formControlMap[field] + "']"
            personalData[field] = await browser.driver.findElement(by.xpath(xpath)).getAttribute("value");
        }

        return personalData;
    }
};

module.exports = {
    profilePage: new ProfilePage(),
    personalDetailsPage: new PersonalDetailsPage()
};
