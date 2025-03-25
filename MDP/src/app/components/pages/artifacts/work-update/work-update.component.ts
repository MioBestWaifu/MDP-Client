import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgeRating } from '../../../../models/accessory/age-rating';
import { Category } from '../../../../models/accessory/category';
import { Demographic } from '../../../../models/accessory/demographic';
import { Media } from '../../../../models/accessory/media';
import { AccessoryService } from '../../../../services/accessory.service';
import { CommonContainerService } from '../../../../services/common-container.service';
import { ImagesService } from '../../../../services/images.service';
import { MediaQueryService } from '../../../../services/media-query.service';
import { PageLoadingService } from '../../../../services/page-loading.service';
import { WorksService } from '../../../../services/works.service';
import { BasePageComponent } from '../../base-page/base-page.component';
import { Artifact } from '../../../../models/artifacts/artifact';
import { ImageInsert } from '../../../../models/image-insert';
import { EntityType } from '../../../../models/entity-type';
import { ImageType } from '../../../../models/image-type';

@Component({
  selector: 'mdp-work-update',
  templateUrl: './work-update.component.html',
  styleUrl: './work-update.component.scss'
})
export class WorkUpdateComponent extends BasePageComponent implements OnInit {
  artifact!: Artifact;
  otherNamesString!: string;

  mediaOptions: Media[] = [];
  categoryOptions: Category[] = [];
  demographicOptions: Demographic[] = [];
  ageRatingOptions: AgeRating[] = [];

  constructor(private conn: AccessoryService, private router:Router, private worksConn: WorksService, private imagesConn: ImagesService, mediaQuery: MediaQueryService, common: CommonContainerService,
    connection: PageLoadingService, route: ActivatedRoute, elementRef: ElementRef, renderer: Renderer2) {
    super(mediaQuery, common, connection, route, elementRef, renderer);
  }

  override ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.worksConn.Retrieve(id).subscribe((data) => {
      this.artifact = data;
      this.otherNamesString = this.artifact.otherNames?.map((name) => name.literal).join(', ')!;
    });

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

  update() {
    const requiredProperties = {
      name: this.artifact.shortName.literal,
      fullName: this.artifact.fullName.literal,
      media: this.artifact.media,
      categories: this.artifact.categories,
      ageRating: this.artifact.ageRating,
      mainBase64: this.artifact.mainImage.content,
      cardBase64: this.artifact.cardImage.content
    };

    for (const [key, value] of Object.entries(requiredProperties)) {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        window.alert(`${key} is required.`);
        return;
      }
    }

    if(this.otherNamesString){
      const arrayOfOtherNames = this.otherNamesString.split(',');
      for(let i = 0; i < arrayOfOtherNames.length; i++) {
        if(!this.artifact.otherNames){
          this.artifact.otherNames = [];
        }
        
        if(this.artifact.otherNames[i]) {
          this.artifact.otherNames[i].literal = arrayOfOtherNames[i].trim();
        } else {
          this.artifact.otherNames.push({literal: arrayOfOtherNames[i].trim()});
        }
      }

      if (this.artifact.otherNames && arrayOfOtherNames.length < this.artifact.otherNames.length) {
        for (let i = arrayOfOtherNames.length; i < this.artifact.otherNames.length; i++) {
          this.artifact.otherNames.pop();
        }
      }
  }

    this.worksConn.Update(this.artifact).subscribe((workData) => {
      this.warnAndClear(workData.id);
    });
  }

  warnAndClear(id: number) {
    window.alert("Work successfully updated with id: " + id);
    this.router.navigate(['/update-work', id]);
  }

  imageChosen(event: Event, type: 'main' | 'card') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        if (type === 'main') {
          this.artifact.mainImage.content = base64;
        } else {
          this.artifact.cardImage.content = base64;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}