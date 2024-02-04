import { Dictionary } from "../../classes/dictionary";
import { Interest } from "../interest";
import { BasePageModel } from "./base-page-model";

export class InterestUpdatePageModel extends BasePageModel{
    interestDictionary!:Dictionary<string,Interest[]>

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
