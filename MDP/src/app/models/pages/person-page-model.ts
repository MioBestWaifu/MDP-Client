import { Link } from "../link"
import { Person } from "../person"

export class PersonPageModel {
    person!:Person
    artifactParticipations:Link[] | undefined
    companyAffiliations:Link[] | undefined
}
