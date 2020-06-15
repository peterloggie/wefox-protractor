var EC = protractor.ExpectedConditions;

var LoginPage = function() {

    this.title = "Log in - wefox";
    this.path = "https://my.wefox.de/login?locale=en";

    this.visit = async function() {
        browser.get(this.path);
        await browser.wait(EC.titleIs(this.title), 10000);
    }

    this.logIn = async function(username, password) {
        await element(by.xpath("//label[@for='user_name']")).click();
        await element(by.id("user_name")).sendKeys(username);
        await element(by.xpath("//label[@for='password']")).click();
        await element(by.id("password")).sendKeys(password);
        await element(by.partialButtonText("Log in")).click()
        await browser.wait(EC.not(EC.titleIs(this.title), 10000));
    }

}

module.exports = new LoginPage();