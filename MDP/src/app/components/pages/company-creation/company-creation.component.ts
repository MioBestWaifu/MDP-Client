import { Component, OnInit } from "@angular/core";
import { Company } from "../../../models/companies/company";
import { Country } from "../../../models/country";
import { EntityType } from "../../../models/entity-type";
import { ImageInsert } from "../../../models/image-insert";
import { ImageType } from "../../../models/image-type";
import { Role } from "../../../models/role";
import { CompaniesService } from "../../../services/companies.service";
import { ImagesService } from "../../../services/images.service";
import { AccessoryService } from "../../../services/accessory.service";
import { CompanyInsert } from "../../../models/companies/company-insert";


@Component({
  selector: 'mdp-company-creation',
  templateUrl: './company-creation.component.html',
  styleUrls: ['./company-creation.component.scss']
})
export class CompanyCreationComponent implements OnInit {
  shortName!: string;
  fullName!: string;
  description!: string;
  country!: Country;
  roles!: Role[];
  foundingDate?: Date;
  mainBase64?: string;
  mainExtension?: string;
  cardBase64?: string;
  cardExtension?: string;

  countryOptions: Country[] = [];
  roleOptions: Role[] = [];

  constructor(private companiesService: CompaniesService, private imagesService: ImagesService, 
    private accessoriesService: AccessoryService) {}

  ngOnInit(): void {
    // Load country options
    this.accessoriesService.LoadAllCountries().subscribe((data) => {
      this.countryOptions = data;
    });

    // Load role options
    this.accessoriesService.LoadAllRoles().subscribe((data) => {
      this.roleOptions = data;
    });
  }

  Create(): void {
    const requiredProperties = {
      shortName: this.shortName,
      fullName: this.fullName,
      country: this.country,
      roles: this.roles,
      mainBase64: this.mainBase64,
      cardBase64: this.cardBase64
    };

    for (const [key, value] of Object.entries(requiredProperties)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        window.alert(`${key} is required.`);
        return;
      }
    }

    const company: CompanyInsert = {
      shortName: this.shortName,
      fullName: this.fullName,
      description: this.description,
      country: this.country,
      roles: this.roles,
      foundingDate: this.foundingDate!,
    };

    this.companiesService.Create(company).subscribe((createdCompany) => {
      console.log('Company created successfully with id:', createdCompany.id);

      const mainImage: ImageInsert = {
        targetId: createdCompany.id,
        targetType: EntityType.Company,
        content: this.mainBase64!,
        type: ImageType.MainImage
      };

      this.imagesService.Create(mainImage).subscribe(() => {
        const cardImage: ImageInsert = {
          targetId: createdCompany.id,
          targetType: EntityType.Company,
          content: this.cardBase64!,
          type: ImageType.CardImage
        };

        this.imagesService.Create(cardImage).subscribe(() => {
          this.WarnAndClear(createdCompany.id);
        });
      });
    });
  }

  WarnAndClear(id: number): void {
    window.alert('Company successfully created with id: ' + id);
    this.shortName = '';
    this.fullName = '';
    this.description = '';
    this.country = undefined!;
    this.roles = [];
    this.foundingDate = undefined;
    this.mainBase64 = undefined;
    this.mainExtension = undefined;
    this.cardBase64 = undefined;
    this.cardExtension = undefined;
  }

  ImageChosen(event: Event, type: 'main' | 'card'): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        if (type === 'main') {
          this.mainBase64 = base64;
          this.mainExtension = file.type.split('/')[1];
        } else {
          this.cardBase64 = base64;
          this.cardExtension = file.type.split('/')[1];
        }
      };
      reader.readAsDataURL(file);
    }
  }

  compareById(item1: any, item2: any): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}
