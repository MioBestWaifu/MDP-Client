import { Component, OnInit } from '@angular/core';
import { Country } from '../../../models/country';
import { Role } from '../../../models/role';
import { Gender } from '../../../models/gender';
import { PersonInsert } from '../../../models/persons/person-insert';
import { PeopleService } from '../../../services/people.service';
import { ImagesService } from '../../../services/images.service';
import { ImageInsert } from '../../../models/image-insert';
import { EntityType } from '../../../models/entity-type';
import { ImageType } from '../../../models/image-type';
import { AccessoryService } from '../../../services/accessory.service';

@Component({
  selector: 'mdp-person-creation',
  templateUrl: './person-creation.component.html',
  styleUrls: ['./person-creation.component.scss']
})
export class PersonCreationComponent implements OnInit {
  shortName!: string;
  fullName!: string;
  nicknamesString!: string;
  description!: string;
  country!: Country;
  roles!: Role[];
  birthday?: Date;
  gender!: Gender;
  mainBase64?: string;
  mainExtension?: string;
  cardBase64?: string;
  cardExtension?: string;

  countryOptions: Country[] = [];
  roleOptions: Role[] = [];
  genderOptions: string[] = [];

  constructor(private peopleService: PeopleService, private imagesService: ImagesService, private accessoryService: AccessoryService) {}

  ngOnInit(): void {
    // Load country options
    this.accessoryService.LoadAllCountries().subscribe((data) => {
      this.countryOptions = data;
    });

    // Load role options
    this.accessoryService.LoadAllRoles().subscribe((data) => {
      this.roleOptions = data;
    });

    this.genderOptions = ["Male", "Female", "Other", "Unknown"];
  }

  Create(): void {
    const requiredProperties = {
      shortName: this.shortName,
      fullName: this.fullName,
      country: this.country,
      roles: this.roles,
      gender: this.gender,
      mainBase64: this.mainBase64,
      cardBase64: this.cardBase64
    };

    for (const [key, value] of Object.entries(requiredProperties)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        window.alert(`${key} is required.`);
        return;
      }
    }

    const person: PersonInsert = {
      shortName: this.shortName,
      fullName: this.fullName,
      nicknames: this.nicknamesString ? this.nicknamesString.split(',').map((n) => n.trim()) : [],
      country: this.country,
      roles: this.roles,
      description: this.description,
      birthday: this.birthday,
      gender: this.gender
    };

    this.peopleService.Create(person).subscribe((createdPerson) => {
      console.log('Person created successfully with id:', createdPerson.id);

      const mainImage: ImageInsert = {
        targetId: createdPerson.id,
        targetType: EntityType.Person,
        content: this.mainBase64!,
        type: ImageType.MainImage
      };

      this.imagesService.Create(mainImage).subscribe(() => {
        const cardImage: ImageInsert = {
          targetId: createdPerson.id,
          targetType: EntityType.Person,
          content: this.cardBase64!,
          type: ImageType.CardImage
        };

        this.imagesService.Create(cardImage).subscribe(() => {
          this.WarnAndClear(createdPerson.id);
        });
      });
    });
  }

  WarnAndClear(id: number): void {
    window.alert('Person successfully created with id: ' + id);
    this.shortName = '';
    this.fullName = '';
    this.nicknamesString = '';
    this.description = '';
    this.country = undefined!;
    this.roles = [];
    this.birthday = undefined;
    this.gender = undefined!;
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