import { Link } from "./link"

export class Interest {
    link!:Link
    description!:string
    targetDemographics!:string[]

    static readonly testInterest:Interest = {
        link: Link.testInterest,
        description: "This is a test interest",
        targetDemographics: ["Test Demographic 1", "Test Demographic 2", "Test Demographic 3"]
    }
}
