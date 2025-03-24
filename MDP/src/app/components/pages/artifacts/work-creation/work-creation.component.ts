import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AgeRating } from '../../../../models/accessory/age-rating';
import { Category } from '../../../../models/accessory/category';
import { Demographic } from '../../../../models/accessory/demographic';
import { Media } from '../../../../models/accessory/media';
import { ArtifactInsert } from '../../../../models/artifacts/artifact-insert';
import { AccessoryService } from '../../../../services/accessory.service';
import { WorksService } from '../../../../services/works.service';
import { BasePageComponent } from '../../base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { CommonContainerService } from '../../../../services/common-container.service';
import { MediaQueryService } from '../../../../services/media-query.service';
import { PageLoadingService } from '../../../../services/page-loading.service';
import { ImagesService } from '../../../../services/images.service';
import { ImageInsert } from '../../../../models/image-insert';
import { EntityType } from '../../../../models/entity-type';
import { ImageType } from '../../../../models/image-type';

@Component({
  selector: 'mdp-work-creation',
  templateUrl: './work-creation.component.html',
  styleUrl: './work-creation.component.scss'
})

export class WorkCreationComponent extends BasePageComponent implements OnInit{
  
  name!: string;
  fullName!: string;
  otherNames!: string;
  description?: string;
  media!: Media;
  categories!: Category[];
  targetDemographics?: Demographic[];
  ageRating!: AgeRating;
  releaseDate?: Date;
  mainBase64?: string;
  mainExtension?: string;
  cardBase64?: string;
  cardExtension?: string;

  mediaOptions: Media[] = [];
  categoryOptions: Category[] = [];
  demographicOptions: Demographic[] = [];
  ageRatingOptions: AgeRating[] = [];

  constructor(private conn:AccessoryService, private worksConn:WorksService, private imagesConn:ImagesService, mediaQuery:MediaQueryService,common:CommonContainerService,
      connection:PageLoadingService, route:ActivatedRoute,elementRef:ElementRef, renderer:Renderer2) { 
    super(mediaQuery,common,connection, route,elementRef, renderer);
  }

  override ngOnInit(): void {
    this.conn.LoadAllMedias().subscribe((data) => {
      this.mediaOptions = data;
    });
    this.conn.LoadAllCategories().subscribe((data) => {
      this.categoryOptions = data;
    });

    this.conn.LoadAllDemographics().subscribe((data) => {
      this.demographicOptions = data;
    });

    this.conn.LoadAllAgeRatings().subscribe((data) => {
      this.ageRatingOptions = data;
    });
  }

  Create() {
    const requiredProperties = {
      name: this.name,
      fullName: this.fullName,
      media: this.media,
      categories: this.categories,
      ageRating: this.ageRating,
      mainBase64: this.mainBase64,
      cardBase64: this.cardBase64
    };
  
    for (const [key, value] of Object.entries(requiredProperties)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        window.alert(`${key} is required.`);
        return;
      }
    }

    const artifactInsert = new ArtifactInsert();
    artifactInsert.name = this.name;
    artifactInsert.fullName = this.fullName;
    artifactInsert.otherNames = this.otherNames.split(",");
    artifactInsert.description = this.description;
    artifactInsert.media = this.media;
    artifactInsert.categories = this.categories;
    artifactInsert.targetDemographics = this.targetDemographics;
    artifactInsert.ageRating = this.ageRating;
    artifactInsert.releaseDate = this.releaseDate;

    this.worksConn.Create(artifactInsert).subscribe((workData) => {
      console.log("Work created successfully with id: " + workData.id);
      const mainImage:ImageInsert ={targetId:workData.id, targetType: EntityType.Artifact, content: this.mainBase64!, type: ImageType.MainImage};
      this.imagesConn.Create(mainImage).subscribe((mainImgData) => {
        console.log("Main Image created successfully with id: " + mainImgData.id);
        const cardImage:ImageInsert ={targetId:workData.id, targetType: EntityType.Artifact, content: this.cardBase64!, type: ImageType.CardImage};
        this.imagesConn.Create(cardImage).subscribe((cardImgData) => {
          console.log("Card Image created successfully with id: " + cardImgData.id);
          this.WarnAndClear(workData.id);
        });
      });
    });
  }

  WarnAndClear(id:number){
    window.alert("Work sucessfully created with id: " + id);
    this.name = '';
  this.fullName = '';
  this.otherNames = '';
  this.description = undefined;
  this.media = undefined!;
  this.categories = [];
  this.targetDemographics = undefined;
  this.ageRating = undefined!;
  this.releaseDate = undefined;
  this.mainBase64 = undefined;
  this.mainExtension = undefined;
  this.cardBase64 = undefined;
  this.cardExtension = undefined;
  }

  ImageChosen(event: Event, type: 'main' | 'card') {
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
}
