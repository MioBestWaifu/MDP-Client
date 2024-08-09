import { Artifact } from "../artifacts/artifact";
import { IParticipation } from "../iparticipation";
import { Role } from "../role";
import { Company } from "./company";

export class CompanyParticipation implements IParticipation {
    participant!: Company;
    artifact?: Artifact;
    roles!: Role[];
    additionalInformation?:string;
}