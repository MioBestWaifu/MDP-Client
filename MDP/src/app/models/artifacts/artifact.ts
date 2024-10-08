import { AgeRating } from "../accessory/age-rating";
import { Category } from "../accessory/category";
import { Demographic } from "../accessory/demographic";
import { Media } from "../accessory/media";
import { Name } from "../name";
import { Image } from "../image";
import { IEntity } from "../ientity";

export class Artifact implements IEntity {
  [key: string]: any;
  
  id!: number;
  shortName!: Name;
  fullName!: Name;
  otherNames?: Name[];
  description?: string;
  media!: Media;
  categories!: Category[];
  targetDemographics?: Demographic[];
  ageRating?: AgeRating;
  cardImage!: Image;
  mainImage!: Image;
  otherImages?: Image[];
  averageRating!: number;
  releaseDate?: Date;
}