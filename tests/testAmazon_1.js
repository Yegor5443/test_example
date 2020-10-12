
let searchContainsText = require("../page-object/constants/searchInputs.js").searchContainsText
let searchText = require("../page-object/constants/searchInputs.js").searchText
let searchFiled = require("../page-object/controls/searchField.js")
const {Builder} = require('selenium-webdriver');

(async function testAmazon() {
    let driver = await new Builder().forBrowser("chrome").build();

    try { 
        await driver.get('http://amazon.com');
        await searchFiled.searchRequiredText(driver, searchText.tinyEpic);
        await searchFiled.isTextPresentInSearchBar(driver, searchContainsText.tinyEpicGalaxies.toLowerCase())
        console.log("First Test Passed Successfully.");
    }
    catch(err) {
        throw new Error("First Test FAILED.");
    }
    finally{
        await driver.quit()
    }
})();