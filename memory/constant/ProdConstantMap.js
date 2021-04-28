const ConstantMap = require('./ConstantMap');

class ProdConstantMap extends ConstantMap {
    constructor() {
        super();

        this.defineConstant('BASE_URL', '');
    }
}

module.exports = ProdConstantMap;
