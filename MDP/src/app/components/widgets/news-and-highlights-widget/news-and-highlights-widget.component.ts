import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Link } from '../../../models/link';

@Component({
  selector: 'mdp-news-and-highlights-widget',
  templateUrl: './news-and-highlights-widget.component.html',
  styleUrl: './news-and-highlights-widget.component.scss'
})
export class NewsAndHighlightsWidgetComponent extends BaseComponent{
  @Input() links!: Link[];
  @Input() target = '';
}
