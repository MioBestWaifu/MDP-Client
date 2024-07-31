import { Person } from "../persons/person";
import { Company } from "./company";

export class CompanyPerson{
    company?:Company;
    person?:Person;
    start!:Date;
    end?:Date;
}