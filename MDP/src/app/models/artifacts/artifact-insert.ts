import { AgeRating } from "../accessory/age-rating";
import { Category } from "../accessory/category";
import { Demographic } from "../accessory/demographic";
import { Media } from "../accessory/media";

export class ArtifactInsert {
    name!: string;
    fullName!: string;
    otherNames: string[] = [];
    description?: string;
    media!: Media;
    categories!: Category[];
    targetDemographics?: Demographic[];
    ageRating!: AgeRating;
    releaseDate?: Date;
}