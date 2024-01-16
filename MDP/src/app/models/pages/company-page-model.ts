import { Company } from "../company"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class CompanyPageModel extends BasePageModel{
    company!:Company
    artifactParticipations:Link[] | undefined
    affilites:Link[] | undefined
}
