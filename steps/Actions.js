const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const { State } = require("@cucumber-e2e/po");
const { Memory } = require("@cucumber-e2e/memory");
const ConfigConstants = require("./helpers/ConfigConstants");
const { browser } = require("protractor");
const { ecHelper } = require("./helpers/ecHelper");
const { ECOptions } = require("./helpers/ecHelper");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^open "(.+)"$/, async function(url) {
    const parsedUrl = Memory.getValue(url);
    await browser.get(parsedUrl);
});

When(/^type "(.+)" to "(.+)"$/, async function(value, alias) {
    const page = State.getPage();
    const parsedValue = Memory.getValue(value);
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    await element.sendKeys(parsedValue);
});

When(/^click "(.+)"$/, async function(alias) {
    const page = State.getPage();
    const element = page.getElement(alias);
    await browser.wait(
        ecHelper(element, ECOptions.VISIBLE),
        ConfigConstants.VISIBILITY_TIMEOUT
    );
    await element.click();
});
