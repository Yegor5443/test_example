const {By} = require('selenium-webdriver');
let resultField = "//a[@class='a-link-normal a-text-normal']//span[contains(text(),'{}')]"
async function isProductPresent(driver, text) {
    await driver.findElement(By.xpath(resultField.replace("{}", "Tiny Epic Galaxies")));
    
}

module.exports.isProductPresent = isProductPresent