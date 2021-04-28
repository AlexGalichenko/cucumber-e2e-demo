const { AbstractComputedMap: ComputedMap } = require('@cucumber-e2e/memory');
const {
    getUsername,
    getPassword
} = require('./credential');

class ClarionComputedMap extends ComputedMap {
    constructor() {
        super();

        this.defineComputed(/^USERNAME$/, getUsername);
        this.defineComputed(/^PASSWORD$/, getPassword);
    }
}

module.exports = ClarionComputedMap;
