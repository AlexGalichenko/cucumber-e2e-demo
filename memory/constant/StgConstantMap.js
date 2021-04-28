const ConstantMap = require('./ConstantMap');

class StgConstantMap extends ConstantMap {
    constructor() {
        super();

        this.defineConstant('BASE_URL', '');
    }
}

module.exports = StgConstantMap;
