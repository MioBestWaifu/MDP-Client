import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { CommonContainerService } from '../../../services/common-container.service';
import { MediaQueryService } from '../../../services/media-query.service';

@Component({
  selector: 'mdp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent extends BaseComponent {
  public query: string = '';

  constructor(private router: Router,mediaQuery:MediaQueryService, common:CommonContainerService, elementRef:ElementRef, 
    renderer:Renderer2) {
    super(mediaQuery, common,elementRef, renderer);
  }

  Search() {
    this.router.navigate(['/search'], { queryParams: { query: this.query } });
  }
}