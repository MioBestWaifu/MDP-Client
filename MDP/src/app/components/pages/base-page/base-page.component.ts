import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { CommonContainerService } from '../../../services/common-container.service';
import { MediaQueryService } from '../../../services/media-query.service';
import { PageLoadingService } from '../../../services/page-loading.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdp-base-page',
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss'
})
export class BasePageComponent extends BaseComponent{
  
  
  constructor (mediaQuery:MediaQueryService,common:CommonContainerService,
     public connection:PageLoadingService, protected route:ActivatedRoute,elementRef:ElementRef, renderer:Renderer2){
    super(mediaQuery,common,elementRef, renderer);
  }

  compareById(item1: any, item2: any): boolean {
    return item1 && item2 && item1.id === item2.id;
  }
}
