const { AbstractConstantMap: ConstantMap } = require('@cucumber-e2e/memory');

class ClarionConstantMap extends ConstantMap {
    constructor() {
        super();
    }
}

module.exports = ClarionConstantMap;
