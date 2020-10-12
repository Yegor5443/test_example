const {By} = require('selenium-webdriver');
const productLocator = "//a[@class='a-link-normal a-text-normal']//span";

async function isProductPresent(driver, text) {
    const products = await driver.findElements(By.xpath(productLocator));
    for await (const productLabel of products.map(p => p.getText())) {
        if (productLabel.includes(text)) return true
    }
    return false
}

// Alternative version 
const productByLabelLocator = "//a[@class='a-link-normal a-text-normal']//span[contains(text(),'{}')]"
function isProductPresentByLabel(driver, text) {
    return driver.findElement(By.xpath(productByLabelLocator.replace("{}", text)));
}

module.exports.isProductPresent = isProductPresent
module.exports.isProductPresentByLabel = isProductPresentByLabel