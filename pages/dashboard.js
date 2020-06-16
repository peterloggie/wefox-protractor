var EC = protractor.ExpectedConditions;

class DashboardPage {

    constructor() {
        this.title = "Dashboard - wefox";
        this.path = "https://my.wefox.de";
    }

    getBrokerImage() {
        var imageElement = browser.driver.findElement(by.css(".wf-c-agent-card__image"));
        var imagePath = imageElement.getAttribute("src");
        return imagePath
    }
}

module.exports = new DashboardPage();