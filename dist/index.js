"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectValidator = void 0;
const GetRules_1 = require("./GetRules");
class ObjectValidator {
    validate(dummy, rule) {
        let ruleList = [];
        let dummyList = [];
        const getRules = new GetRules_1.GetRules();
        const result = getRules.execute(dummy, rule);
        ruleList = result[0];
        dummyList = result[1];
        if (JSON.stringify(ruleList) === JSON.stringify(dummyList))
            return true;
        return false;
    }
}
exports.ObjectValidator = ObjectValidator;
exports.ObjectValidator = ObjectValidator;
//# sourceMappingURL=index.js.map