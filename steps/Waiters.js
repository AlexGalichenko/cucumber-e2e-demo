const { When, setDefaultTimeout } = require("cucumber");
const ConfigConstants = require("./helpers/ConfigConstants");
const { browser } = require("protractor");

setDefaultTimeout(ConfigConstants.GLOBAL_TIMEOUT);

When(/^wait "(\d+)" seconds$/, async function(time) {
    await browser.sleep(time * 1000);
});
