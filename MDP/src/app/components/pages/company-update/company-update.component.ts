import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Artifact } from "../../../models/artifacts/artifact";
import { Company } from "../../../models/companies/company";
import { CompanyParticipation } from "../../../models/companies/company-participation";
import { CompanyPerson } from "../../../models/companies/company-person";
import { Country } from "../../../models/country";
import { Person } from "../../../models/persons/person";
import { Role } from "../../../models/role";
import { CompaniesService } from "../../../services/companies.service";
import { PeopleService } from "../../../services/people.service";
import { WorksService } from "../../../services/works.service";
import { AccessoryService } from "../../../services/accessory.service";

@Component({
  selector: 'mdp-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent implements OnInit {
  company!: Company;
  countryOptions: Country[] = [];
  roleOptions: Role[] = [];
  nonparticipantArtifacts: Artifact[] = [];
  artifactParticipants: CompanyParticipation[] = [];
  artifactSearchTerm: string = '';
  nonparticipantPeople: Person[] = [];
  personParticipants: CompanyPerson[] = [];
  personSearchTerm: string = '';

  constructor(
    private companiesService: CompaniesService,
    private worksService: WorksService,
    private peopleService: PeopleService,
    private accessoryService: AccessoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companiesService.Retrieve(id).subscribe((data) => {
      this.company = data;
    });

    this.companiesService.GetParticipatedArtifacts(id).subscribe((artifacts) => {
      this.artifactParticipants = artifacts;
    });

    this.companiesService.GetParticipantPeople(id).subscribe((people) => {
      this.personParticipants = people;
    });

    this.accessoryService.LoadAllCountries().subscribe((countries) => {
      this.countryOptions = countries;
    });

    this.accessoryService.LoadAllRoles().subscribe((roles) => {
      this.roleOptions = roles;
    });
  }

  Update(): void {
    this.companiesService.Update(this.company).subscribe(() => {
      this.companiesService.UpdateParticipatedArtifacts(this.company.id, this.artifactParticipants).subscribe(() => {
        this.companiesService.UpdateParticipantPeople(this.company.id, this.personParticipants).subscribe(() => {
          this.router.navigate(['/company', this.company.id]);
        });
      });
    });
  }

  ImageChosen(event: Event, type: 'main' | 'card'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        if (type === 'main') {
          this.company.mainImage.content = base64;
        } else {
          this.company.cardImage.content = base64;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  AddArtifactParticipation(artifact: Artifact): void {
    const participation: CompanyParticipation = {
      participant: this.company,
      artifact: artifact,
      roles: []
    };
    this.nonparticipantArtifacts = this.nonparticipantArtifacts.filter((a) => a.id !== artifact.id);
    this.artifactParticipants.push(participation);
  }

  RemoveArtifactParticipation(participation: CompanyParticipation): void {
    this.nonparticipantArtifacts.push(participation.artifact!);
    this.artifactParticipants = this.artifactParticipants.filter((p) => p.artifact?.id !== participation.artifact?.id);
  }

  SearchArtifacts(): void {
    this.worksService.Search(this.artifactSearchTerm).subscribe((artifacts) => {
      this.nonparticipantArtifacts = artifacts.filter(
        (artifact) => !this.artifactParticipants.some((p) => p.artifact?.id === artifact.id)
      );
    });
  }

  AddPersonParticipation(person: Person): void {
    const participation: CompanyPerson = {
      company: this.company,
      person: person,
      start: new Date()
    };
    this.nonparticipantPeople = this.nonparticipantPeople.filter((p) => p.id !== person.id);
    this.personParticipants.push(participation);
  }

  RemovePersonParticipation(participation: CompanyPerson): void {
    this.nonparticipantPeople.push(participation.person!);
    this.personParticipants = this.personParticipants.filter((p) => p.person!.id !== participation.person!.id);
  }

  SearchPeople(): void {
    this.peopleService.Search(this.personSearchTerm).subscribe((people) => {
      this.nonparticipantPeople = people.filter(
        (person) => !this.personParticipants.some((p) => p.person!.id === person.id)
      );
    });
  }

  compareById(item1: any, item2: any): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}