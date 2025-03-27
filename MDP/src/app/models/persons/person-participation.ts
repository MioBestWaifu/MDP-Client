import { Artifact } from "../artifacts/artifact";
import { IParticipation } from "../iparticipation";
import { Role } from "../role";
import { Person } from "./person";

export class PersonParticipation implements IParticipation {
  id?: number;
  participant!: Person;
  artifact!: Artifact;
  roles!: Role[];
  additionalInformation?: string;
}