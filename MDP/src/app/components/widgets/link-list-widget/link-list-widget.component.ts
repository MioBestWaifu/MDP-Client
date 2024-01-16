import { Component, Input } from '@angular/core';
import { Link } from '../../../models/link';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-link-list-widget',
  templateUrl: './link-list-widget.component.html',
  styleUrls: ['../widget.scss','./link-list-widget.component.scss']
})
export class LinkListWidgetComponent extends BaseComponent{
  @Input() links!: Link[];
  @Input() forceSmallBlock = false;
}
