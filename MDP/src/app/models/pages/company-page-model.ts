import { Company } from "../companies/company"
import { CompanyParticipation } from "../companies/company-participation"
import { CompanyPerson } from "../companies/company-person"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class CompanyPageModel extends BasePageModel{
    company!:Company
    participations:CompanyParticipation[] = [];
    affiliates:CompanyPerson[] = [];
}
