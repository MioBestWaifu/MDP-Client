import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-login-forms',
  
  
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.scss'
})
export class LoginFormsComponent extends BaseComponent{
  public emailValue: string = '';
  public passwordValue: string = '';
}
