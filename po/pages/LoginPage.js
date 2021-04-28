const BasePage = require("./BasePage");

class LoginPage extends BasePage {

    constructor() {
        super();

        this.defineElement({alias: "Username Input", selector: "#username"});
        this.defineElement({alias: "Password Input", selector: "#password"});
        this.defineElement({alias: "Login Button", selector: "button.id-login-button"});
    }
}

module.exports = LoginPage;
