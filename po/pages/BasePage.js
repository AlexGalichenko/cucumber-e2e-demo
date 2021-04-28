const { ProtractorPage: Page } = require("@cucumber-e2e/po");

class BasePage extends Page {

    constructor() {
        super();
    }
}

module.exports = BasePage;
