import { Country } from "../country";
import { IEntity } from "../ientity";
import { Image } from "../image";
import { Name } from "../name";
import { Role } from "../role";

export class Company implements IEntity{
    id!:number;
    shortName!:Name;
    fullName!:Name;
    description!:string;
    cardImage!:Image;
    mainImage!:Image;
    otherImages?:Image[];
    country!:Country;
    roles!:Role[];
    foundingDate!:Date;
    averageRating!:number;
}
