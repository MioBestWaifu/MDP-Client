import { Country } from "../country";
import { Role } from "../role";

export class CompanyInsert {
    shortName!: string;
    fullName!: string;
    country!: Country;
    roles!: Role[];
    description!: string;
    foundingDate!: Date;
}