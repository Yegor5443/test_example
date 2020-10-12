
const {searchContainsText} = require("../page-object/constants/searchInputs.js")
const {searchText} = require("../page-object/constants/searchInputs.js")
const searchFiled = require("../page-object/controls/searchField.js")
const resultPage = require("../page-object/pages/resultPage.js")
const {Builder} = require('selenium-webdriver');

async function testAmazon() {
    const driver = await new Builder().forBrowser("chrome").build();

    try { 
        await driver.get('http://amazon.com');
        await searchFiled.searchRequiredText(driver, searchText.tinyEpicGames);
        await searchFiled.clickOnSearchButton(driver);
        if (await resultPage.isProductPresent(driver, searchContainsText.tinyEpicGalaxies)) {
            console.log(`The product with the label "${searchContainsText.tinyEpicGalaxies}" exists.`);
        } else { 
            throw new Error(`The product with the label "${searchContainsText.tinyEpicGalaxies}" does not exist.`)
        } 

        console.log("The second test has passed successfully.");
    }
    catch(err) {
        throw new Error(err, "The second test has failed.");
    }
    finally{
        await driver.quit()
    }
};

testAmazon();