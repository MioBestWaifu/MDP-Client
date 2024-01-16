import { Link } from "../link"
import { Person } from "../person"
import { BasePageModel } from "./base-page-model"

export class PersonPageModel extends BasePageModel{
    person!:Person
    artifactParticipations:Link[] | undefined
    companyAffiliations:Link[] | undefined
}
