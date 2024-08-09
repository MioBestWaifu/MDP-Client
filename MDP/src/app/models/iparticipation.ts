import { Artifact } from "./artifacts/artifact";
import { IEntity } from "./ientity";
import { Role } from "./role";

export interface IParticipation {
    participant?: IEntity;
    artifact?: Artifact;
    roles: Role[];
    additionalInformation?:string;
}