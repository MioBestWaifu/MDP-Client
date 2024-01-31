import { Company } from "../company"
import { Link } from "../link"
import { BasePageModel } from "./base-page-model"

export class CompanyPageModel extends BasePageModel{
    company!:Company
    artifactParticipations:Link[] | undefined
    affiliates:Link[] | undefined

    constructor(){
        super()
        this.company = Company.testCompany
        this.artifactParticipations = []
        for (let i = 0; i < 10; i++){
            this.artifactParticipations.push(Link.testParticipation)
        }
        this.affiliates = []
        for (let i = 0; i < 10; i++){
            this.affiliates.push(Link.testAffiliate)
        }
    }
}
