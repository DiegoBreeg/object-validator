"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetRules_1 = require("./GetRules");
class ObjectValidator {
    constructor() {
        this.GetRules = GetRules_1.GetRules;
        this.ruleList = [];
        this.dummyList = [];
    }
    validate(dummy, rule) {
        const getRules = new this.GetRules();
        const result = getRules.execute(dummy, rule);
        this.ruleList = result[0];
        this.dummyList = result[1];
        if (JSON.stringify(this.ruleList) === JSON.stringify(this.dummyList))
            return true;
        return false;
    }
}
const obj = new ObjectValidator();
const dummy = { name: 'diego', age: 27, hobbies: ['programing', 'gaming'], body: { hair: 'brown', eyes: 'blue' } };
const rule = { name: String, age: Number, hobbies: [], body: [] };
const response = obj.validate(dummy, rule);
console.log(response);
exports.ObjectValidator = ObjectValidator;
//# sourceMappingURL=index.js.map