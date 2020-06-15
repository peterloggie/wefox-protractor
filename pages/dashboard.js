var EC = protractor.ExpectedConditions;

var DashboardPage = function() {

    this.title = "Dashboard - wefox";
    this.path = "https://my.wefox.de";

    this.visit = async function() {
        await browser.get(this.path);
        browser.wait(EC.titleIs(this.title), 10000);
    }

    this.getBrokerImage = function() {
        var imageElement = browser.driver.findElement(by.css(".wf-c-agent-card__image"));
        var imagePath = imageElement.getAttribute("src");
        return imagePath
    }
}

module.exports = new DashboardPage();