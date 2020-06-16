var EC = protractor.ExpectedConditions;

class LoginPage {

    constructor() {
        this.title = "Log in - wefox";
        this.path = "https://my.wefox.de/login?locale=en";
    }

    async visit() {
        browser.get(this.path);
        await browser.wait(EC.titleIs(this.title), 10000);
    }

    async logIn(username, password) {
        await element(by.xpath("//label[@for='user_name']")).click();
        await element(by.id("user_name")).sendKeys(username);
        await element(by.xpath("//label[@for='password']")).click();
        await element(by.id("password")).sendKeys(password);
        await element(by.partialButtonText("Log in")).click()
        await browser.wait(EC.not(EC.titleIs(this.title), 10000));
    }

}

module.exports = new LoginPage();