import { GetRules } from './GetRules'


class ObjectValidator {
    validate(dummy: object, rule: any): boolean {        
        let ruleList: Array<object> = []
        let dummyList: Array<object> = []

        const getRules = new GetRules()
        const result = getRules.execute(dummy, rule)
        ruleList = result[0]
        dummyList = result[1]

        if (JSON.stringify(ruleList) === JSON.stringify(dummyList))
            return true
        return false
    }
}

exports.ObjectValidator = ObjectValidator
export {ObjectValidator}