import { Artifact } from "../artifacts/artifact";
import { CompanyParticipation } from "../companies/company-participation";
import { News } from "../information/news";
import { PersonParticipation } from "../persons/person-participation";
import { BasePageModel } from "./base-page-model";

export class WorkPageModel extends BasePageModel {
  work!: Artifact;
  newsAndHighlights: News[] = [];
  participantPersons: PersonParticipation[] = [];
  participantCompanies: CompanyParticipation[] = [];
  //Reviews temporariamente removidas
}