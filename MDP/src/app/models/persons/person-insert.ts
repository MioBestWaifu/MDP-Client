import { Country } from "../country";
import { Gender } from "../gender";
import { Role } from "../role";

export class PersonInsert {
    shortName!: string;
    fullName!: string;
    nicknames?: string[];
    country!: Country;
    roles!: Role[];
    description!: string;
    birthday?: Date;
    gender!: Gender;
}