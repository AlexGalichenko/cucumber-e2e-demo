const ConstantMap = require('./ConstantMap');

class DevConstantMap extends ConstantMap {
    constructor() {
        super();

        this.defineConstant('BASE_URL', 'https://clarion-dev.legalmarketsgroup.com/');
    }
}

module.exports = DevConstantMap;
