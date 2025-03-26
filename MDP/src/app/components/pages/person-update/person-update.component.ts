import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../../models/persons/person';
import { Artifact } from '../../../models/artifacts/artifact';
import { Company } from '../../../models/companies/company';
import { PersonParticipation } from '../../../models/persons/person-participation';
import { CompanyPerson } from '../../../models/companies/company-person';
import { PeopleService } from '../../../services/people.service';
import { WorksService } from '../../../services/works.service';
import { CompaniesService } from '../../../services/companies.service';
import { AccessoryService } from '../../../services/accessory.service';
import { Role } from '../../../models/role';
import { Country } from '../../../models/country';
import { Gender } from '../../../models/gender';

@Component({
  selector: 'mdp-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.scss']
})
export class PersonUpdateComponent implements OnInit {
  person!: Person;
  countryOptions: Country[] = [];
  roleOptions: Role[] = [];
  genderOptions: string[] = [];
  nonparticipantWorks: Artifact[] = [];
  workParticipants: PersonParticipation[] = [];
  workSearchTerm: string = '';
  nonparticipantCompanies: Company[] = [];
  companyParticipants: CompanyPerson[] = [];
  companySearchTerm: string = '';
  nicknamesString: string = '';

  constructor(
    private peopleService: PeopleService,
    private worksService: WorksService,
    private companiesService: CompaniesService,
    private accessoryService: AccessoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.Retrieve(id).subscribe((data) => {
      this.person = data;
      this.nicknamesString = this.person.nicknames?.map((n) => n.literal).join(', ') || '';
    });

    this.peopleService.GetParticipatedWorks(id).subscribe((works) => {
      this.workParticipants = works;
    });

    this.peopleService.GetParticipatedCompanies(id).subscribe((companies) => {
      this.companyParticipants = companies;
    });

    this.accessoryService.LoadAllCountries().subscribe((countries) => {
      this.countryOptions = countries;
    });

    this.accessoryService.LoadAllRoles().subscribe((roles) => {
      this.roleOptions = roles;
    });

    this.genderOptions = ["Male", "Female", "Other", "Unknown"];
  }

  Update(): void {
    this.person.nicknames = this.nicknamesString.split(',').map((n) => ({ literal: n.trim() }));
    this.peopleService.Update(this.person).subscribe(() => {
      this.workParticipants.forEach((p) => {
        p.participant = this.person;
      });
      this.peopleService.UpdateParticipatedWorks(this.person.id, this.workParticipants).subscribe(() => {
        this.companyParticipants.forEach((p) => {
          p.person = this.person;
        });
        this.peopleService.UpdateParticipatedCompanies(this.person.id, this.companyParticipants).subscribe(() => {
          this.router.navigate(['/person', this.person.id]);
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
          this.person.mainImage.content = base64;
        } else {
          this.person.cardImage.content = base64;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  AddWorkParticipation(work: Artifact): void {
    const participation: PersonParticipation = {
      participant: this.person,
      artifact: work,
      roles: []
    };
    this.nonparticipantWorks = this.nonparticipantWorks.filter((w) => w.id !== work.id);
    this.workParticipants.push(participation);
  }

  RemoveWorkParticipation(participation: PersonParticipation): void {
    this.nonparticipantWorks.push(participation.artifact!);
    this.workParticipants = this.workParticipants.filter((p) => p.artifact!.id !== participation.artifact!.id);
  }

  SearchWorks(): void {
    this.worksService.Search(this.workSearchTerm).subscribe((works) => {
      this.nonparticipantWorks = works.filter(
        (work) => !this.workParticipants.some((p) => p.artifact!.id === work.id)
      );
    });
  }

  AddCompanyParticipation(company: Company): void {
    const participation: CompanyPerson = {
      company: company,
      person: this.person,
      start: new Date()
    };
    this.nonparticipantCompanies = this.nonparticipantCompanies.filter((c) => c.id !== company.id);
    this.companyParticipants.push(participation);
  }

  RemoveCompanyParticipation(participation: CompanyPerson): void {
    this.nonparticipantCompanies.push(participation.company!);
    this.companyParticipants = this.companyParticipants.filter((p) => p.company!.id !== participation.company!.id);
  }

  SearchCompanies(): void {
    this.companiesService.Search(this.companySearchTerm).subscribe((companies) => {
      this.nonparticipantCompanies = companies.filter(
        (company) => !this.companyParticipants.some((p) => p.company!.id === company.id)
      );
    });
  }

  compareById(item1: any, item2: any): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}