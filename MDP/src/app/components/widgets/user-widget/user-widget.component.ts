import { Component, Input } from '@angular/core';
import { User } from '../../../models/users/user';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['../widget.scss','./user-widget.component.scss']
})
export class UserWidgetComponent extends BaseComponent{
  @Input() user: User = new User();
}
