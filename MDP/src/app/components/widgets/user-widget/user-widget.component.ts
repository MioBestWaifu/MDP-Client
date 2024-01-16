import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrl: './user-widget.component.scss'
})
export class UserWidgetComponent extends BaseComponent{
  @Input() user: User = new User();
}
