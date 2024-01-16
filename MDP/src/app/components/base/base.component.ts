import { Component, OnInit } from '@angular/core';
import { CommonContainerService } from '../../services/common-container.service';
import { MediaQueryService } from '../../services/media-query.service';

@Component({
  selector: 'mdp-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent implements OnInit{
  constructor (public mediaQuery:MediaQueryService, public common:CommonContainerService){
  }

  ngOnInit() {
    this.mediaQuery.QueryMedia();
  }
}
