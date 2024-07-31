import { Country } from "../country";
import { Gender } from "../gender";
import { Name } from "../name";
import { Image } from "../image";

export class User {
  id!: number;
  email?: string;
  password?: string;
  nickname!: Name;
  cardImage?: Image;
  mainImage?: Image;
  otherImages?: Image[];
  country?: Country;
  description?: string;
  birthday!: Date;
  gender!: Gender;
}