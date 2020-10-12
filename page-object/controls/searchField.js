const {By, until} = require('selenium-webdriver');
const searchInputLoc = "nav-input";

async function searchRequiredText(driver, text) {
    await driver.wait(until.elementLocated(By.className(searchInputLoc)),2000).sendKeys(text);
}

async function isTextPresentInSearchBar(driver, text) {
    await driver.wait(until.elementLocated(By.xpath("//div[@id='suggestions']/" + 
                                           "div[@data-keyword='{}']".replace("{}", text))));
}

async function clickOnSearchButton(driver) {
    await driver.wait(until.elementLocated(By.xpath("//input[@type='submit']"))).click();
}

module.exports.searchRequiredText = searchRequiredText;
module.exports.isTextPresentInSearchBar = isTextPresentInSearchBar;
module.exports.clickOnSearchButton = clickOnSearchButton;