
const {searchContainsText} = require("../page-object/constants/searchInputs.js")
const {searchText} = require("../page-object/constants/searchInputs.js")
const searchFiled = require("../page-object/controls/searchField.js")
const {Builder} = require('selenium-webdriver');

async function testAmazon() {
    const driver = await new Builder().forBrowser("chrome").build();

    try { 
        await driver.get('http://amazon.com');
        await searchFiled.searchRequiredText(driver, searchText.tinyEpic);
        await searchFiled.isTextPresentInSearchBar(driver, searchContainsText.tinyEpicGalaxies.toLowerCase());

        console.log("The first test has passed successfully.");
    }
    catch(err) {
        throw new Error(err, "The first test has failed.");
    }
    finally{
        await driver.quit()
    }
};

testAmazon();