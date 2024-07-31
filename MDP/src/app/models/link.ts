import { Artifact } from "./artifacts/artifact"
import { Company } from "./companies/company"
import { Person } from "./persons/person"

export class Link {
    imgUrl:string | undefined;
    mainLabel!: string;
    secondaryLabel: string | undefined;
    redirectTo!: string;
}
