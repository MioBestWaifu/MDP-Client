import { Link } from "../link"
import { Person } from "../person"
import { BasePageModel } from "./base-page-model"

export class PersonPageModel extends BasePageModel{
    person!:Person
    artifactParticipations:Link[] | undefined
    companyAffiliations:Link[] | undefined

    constructor(){
        super()
        /* this.person = Person.testPerson
        this.artifactParticipations = []
        this.companyAffiliations = []

        for (let i = 0; i < 7; i++) {
            this.artifactParticipations.push(Link.testParticipation)
        }

        for (let i = 0; i < 3; i++) {
            this.companyAffiliations.push(Link.testCompanyAffiliation)
        } */
    }
}
