import { Dictionary } from "../../classes/dictionary";
import { Interest } from "../interest";
import { BasePageModel } from "./base-page-model";

export class InterestUpdatePageModel extends BasePageModel{
    private _interestDictionary!: Dictionary<string,Interest[]>;

    get interestDictionary(): Dictionary<string,Interest[]> {
        return this._interestDictionary;
    }

    set interestDictionary(value: Dictionary<string,Interest[]>) {
        console.log('interestDictionary is being set:', value);
        console.trace(); // This will log a stack trace, showing where the setter was called from
        this._interestDictionary = value;
    }

    constructor(){
        super()
        this.interestDictionary = new Dictionary<string,Interest[]>()
        const interestArray:Interest[] = []
        for (let i = 0; i < 10; i++) {
            interestArray.push(Interest.testInterest)
        }
        for (let i = 0; i < 3; i++) {
            this.interestDictionary.Add("Interest" + i, interestArray)
        }
    }
}
