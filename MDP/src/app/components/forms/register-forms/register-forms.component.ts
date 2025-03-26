import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccessoryService } from '../../../services/accessory.service';
import { Country } from '../../../models/country';
import { Gender } from '../../../models/gender';
import { ImagesService } from '../../../services/images.service';
import { ImageInsert } from '../../../models/image-insert';
import { EntityType } from '../../../models/entity-type';
import { ImageType } from '../../../models/image-type';
import { User } from '../../../models/users/user';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { CommonContainerService } from '../../../services/common-container.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mdp-register-forms',
  templateUrl: './register-forms.component.html',
  styleUrls: ['./register-forms.component.scss']
})
export class RegisterFormsComponent implements OnInit {
  @Output() changeFormLogin: EventEmitter<void> = new EventEmitter();

  username!: string;
  email!: string;
  password!: string;
  confirmedPassword!: string;
  birthday!: Date;
  country!: Country;
  gender!: number;
  mainBase64?: string;
  cardBase64?: string;

  countryOptions: Country[] = [];
  genderOptions: string[] = [];

  constructor(private accessoryService: AccessoryService, private imagesService: ImagesService,
    private authService:AuthenticatorService, private common:CommonContainerService, private router:Router
  ) {}

  ngOnInit(): void {
    // Load country options
    this.accessoryService.LoadAllCountries().subscribe((data) => {
      this.countryOptions = data;
    });

    // Load gender options
    this.genderOptions = Object.keys(Gender).filter((key) => isNaN(Number(key))); // Get string keys of the Gender enum
  }

  Register(): void {
    if (this.password !== this.confirmedPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user: User = {
      id:0,
      shortName: {literal: this.username},
      fullName: {literal: this.username},
      email: this.email,
      password: this.password,
      birthday: this.birthday,
      country: this.country,
      gender: this.gender,
      description:'',
      mainImage: {id:0, content: this.mainBase64!, type:ImageType.MainImage},
      cardImage: {id:0, content: this.cardBase64!, type:ImageType.CardImage},
    };

    this.authService.Register(user).subscribe((data) => {
      alert("Registration sucessfull");
      this.router.navigate(['/']);
    });
    

    /*if (this.mainBase64) {
      const mainImage: ImageInsert = {
        targetId: 0, // Replace with actual user ID after creation
        targetType: EntityType.User,
        content: this.mainBase64,
        type: ImageType.MainImage
      };
      this.imagesService.Create(mainImage).subscribe(() => {
        console.log('Main image uploaded');
      });
    }

    if (this.cardBase64) {
      const cardImage: ImageInsert = {
        targetId: 0, // Replace with actual user ID after creation
        targetType: EntityType.User,
        content: this.cardBase64,
        type: ImageType.CardImage
      };
      this.imagesService.Create(cardImage).subscribe(() => {
        console.log('Card image uploaded');
      });
    }*/
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
        } else {
          this.cardBase64 = base64;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  compareById(item1: any, item2: any): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}

