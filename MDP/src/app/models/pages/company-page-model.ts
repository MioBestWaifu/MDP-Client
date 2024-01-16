import { Company } from "../company"
import { Link } from "../link"

export class CompanyPageModel {
    company!:Company
    artifactParticipations:Link[] | undefined
    affilites:Link[] | undefined
}
