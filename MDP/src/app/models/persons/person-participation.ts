import { Artifact } from "../artifacts/artifact";
import { Role } from "../role";
import { Person } from "./person";

export class PersonParticipation {
  id!: number;
  person?: Person;
  artifact?: Artifact;
  roles!: Role[];
  additionalInformation?: string;
}