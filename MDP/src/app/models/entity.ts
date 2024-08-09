import { Image } from "./image";
import { Name } from "./name";

export abstract class Entity{
     cardImage!: Image
     mainImage!: Image
     shortName!: Name
     fullName!: Name
}