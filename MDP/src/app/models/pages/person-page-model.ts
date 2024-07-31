import { CompanyPerson } from "../companies/company-person";
import { Person } from "../persons/person"
import { PersonParticipation } from "../persons/person-participation";
import { BasePageModel } from "./base-page-model"

export class PersonPageModel extends BasePageModel{
    person!:Person;
    participations:PersonParticipation[] = [];
    affiliations:CompanyPerson[] = [];
}
