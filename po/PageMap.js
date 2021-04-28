const { PageMap: AbstractPageMap } = require("@cucumber-e2e/po");
const LoginPage = require("./pages/LoginPage");
class PageMap extends AbstractPageMap {

    constructor() {
        super();

        this.definePage("Login", "authorization.ping", new LoginPage());
    }

}

module.exports = PageMap;
