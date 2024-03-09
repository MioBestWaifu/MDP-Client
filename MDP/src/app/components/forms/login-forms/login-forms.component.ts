import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-login-forms',


  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.scss'
})
export class LoginFormsComponent extends BaseComponent {
  public emailValue: string = '';
  public passwordValue: string = '';
  public invalidCredentials: boolean = false;

  @Output() changeFormRegister: EventEmitter<any> = new EventEmitter();

  handleLoginClick() {
    //checar os imputs
    this.emailValue;
    this.passwordValue;
    /*If no data matches the finding, it shows in the app that there was an error in the login. ->(noDataMatches)
    if(){
      
    }*/this.invalidCredentials = true;
  }
  handleRegisterClick() {
    this.changeFormRegister.emit();
  }

  // invalidCredentials(){

  // }
}
