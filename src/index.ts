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


exports.ObjectValidator = ObjectValidator