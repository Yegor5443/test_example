
let searchContainsText = require("../page-object/constants/searchInputs.js").searchContainsText
let searchText = require("../page-object/constants/searchInputs.js").searchText
let searchFiled = require("../page-object/controls/searchField.js")
let resultPage = require("../page-object/pages/resultPage.js")
const {Builder} = require('selenium-webdriver');

(async function testAmazon() {
    let driver = await new Builder().forBrowser("chrome").build();

    try { 
        await driver.get('http://amazon.com');
        await searchFiled.searchRequiredText(driver, searchText.tinyEpicGames);
        await searchFiled.clickOnSearchButton(driver)
        await resultPage.isProductPresent(driver, searchContainsText.tinyEpicGalaxies)
        console.log("Second Test Passed Successfully.");
    }
    catch(err) {
        throw new Error("Second Test FAILED.")
    }
    finally{
        await driver.quit()
    }
})();