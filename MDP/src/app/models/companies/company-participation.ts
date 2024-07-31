import { Artifact } from "../artifacts/artifact";
import { Role } from "../role";
import { Company } from "./company";

export class CompanyParticipation {
    company?: Company;
    artifact?: Artifact;
    roles!: Role[];
    additionalInformation?:string;
}