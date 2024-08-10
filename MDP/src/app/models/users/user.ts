import { Country } from "../country";
import { Gender } from "../gender";
import { Name } from "../name";
import { Image } from "../image";
import { IEntity } from "../ientity";

export class User implements IEntity{
  id!: number;
  email?: string;
  password?: string;
  shortName!: Name;
  //Esse aq nunca é utilizado na vdd, o backend nem retorna
  fullName!: Name;
  cardImage!: Image;
  mainImage!: Image;
  otherImages?: Image[];
  country?: Country;
  description?: string;
  birthday!: Date;
  gender!: Gender;
}