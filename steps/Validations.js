const { Given, When, Then, setDefaultTimeout } = require("cucumber");
const { State } = require("@cucumber-e2e/po");
const { expect } = require("chai");
const ConfigConstants = require("./helpers/ConfigConstants");
const { browser } = require("protractor");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^page should be "(.+)"$/, async function(pageName) {
    State.setPage(pageName);
    const pageRegexp = new RegExp(State.pageMap.getPage(pageName).selector);
    const PAGE_ERROR_MESSAGE = `Page ${pageName} has not been loaded`;

    await browser.wait(
        async () => pageRegexp.test(await browser.getCurrentUrl()),
        ConfigConstants.WAIT_PAGE_TIMEOUT,
        PAGE_ERROR_MESSAGE
    );

    expect(await browser.getCurrentUrl()).to.match(pageRegexp);
});
