import { Dictionary } from "../../classes/dictionary";
import { Interest } from "../interest";
import { BasePageModel } from "./base-page-model";

export class InterestUpdatePageModel extends BasePageModel{
    interestDictionary!:Dictionary<string,Interest[]>
}
