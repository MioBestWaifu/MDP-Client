import { Country } from "../country";
import { Gender } from "../gender";
import { Name } from "../name";
import { Role } from "../role";
import { Image } from "../image";

export class Person {
  id!: number;
  shortName!: Name;
  fullName!: Name;
  nicknames?: Name[];
  cardImage!: Image;
  mainImage!: Image;
  otherImages?: Image[];
  country?: Country;
  roles!: Role[];
  description!: string;
  birthday?: Date;
  averageRating!: number;
  gender!: Gender;
}
