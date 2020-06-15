var EC = protractor.ExpectedConditions;

var NavigationBar = function() {

    this.goTo = async function(optionTitle) {
        var currentTitle = await browser.driver.getTitle()
        await browser.driver.findElement(by.xpath("//li/a[@title='" + optionTitle + "']")).click()
        await browser.wait(EC.not(EC.titleIs(currentTitle), 10000));
    }

}

module.exports = new NavigationBar();
