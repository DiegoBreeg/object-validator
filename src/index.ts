import { GetRules } from './GetRules'


class ObjectValidator {
    public GetRules = GetRules
    public ruleList: Array<object> = []
    public dummyList: Array<object> = []


    validate(dummy: object, rule: any): boolean {

        const getRules = new this.GetRules()
        const result = getRules.execute(dummy, rule)
        this.ruleList = result[0]
        this.dummyList = result[1]

        if (JSON.stringify(this.ruleList) === JSON.stringify( this.dummyList))
            return true
        return false
    }
}

const obj = new ObjectValidator()

const dummy = {name: 'diego', age: 27, hobbies: ['programing', 'gaming'], body: {hair: 'brown', eyes: 'blue'}}
const rule = {name: String, age: Number, hobbies: [], body: []}

const response = obj.validate(dummy, rule)
console.log(response)



exports.ObjectValidator = ObjectValidator