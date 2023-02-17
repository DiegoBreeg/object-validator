"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetRules_1 = require("./GetRules");
class ObjectValidator {
    constructor() {
        this.ruleList = [];
        this.dummyList = [];
    }
    validate(dummy, rule) {
        const getRules = new GetRules_1.GetRules();
        const result = getRules.execute(dummy, rule);
        this.ruleList = result[0];
        this.dummyList = result[1];
        if (this.ruleList.toString() === this.dummyList.toString())
            return true;
        return false;
    }
}
module.exports = ObjectValidator;
//# sourceMappingURL=index.js.map