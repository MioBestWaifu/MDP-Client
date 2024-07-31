import { Demographic } from "./accessory/Demographic";
import { Link } from "./link"

export class Interest {
    id!:number;
    description!:string;
    targetDemographics!:Demographic[];
    selected:boolean = false;
}
