import { Image } from "./image";
import { Name } from "./name";

export interface IEntity{
     id:number;
     cardImage: Image;
     mainImage: Image;
     shortName: Name;
     fullName: Name;
}