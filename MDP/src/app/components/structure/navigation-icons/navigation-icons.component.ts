import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-navigation-icons',
  templateUrl: './navigation-icons.component.html',
  styleUrl: './navigation-icons.component.scss'
})
export class NavigationIconsComponent extends BaseComponent {
  public changeTheme: boolean = true;

  switchTheme() {
    this.changeTheme = !this.changeTheme;
  }
}
