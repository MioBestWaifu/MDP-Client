import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrl: './sign-page.component.scss'
})
export class SignPageComponent extends BaseComponent {
  formLogin: boolean = true;

  onChangeFormRegister() {
    this.formLogin = false;
  }
  
  onChangeFormLogin() {
    this.formLogin = true;
  }
}
