import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-register-forms',


  templateUrl: './register-forms.component.html',
  styleUrl: './register-forms.component.scss'
})
export class RegisterFormsComponent extends BaseComponent{
  public usernameValue: string = '';
  public emailValue: string = '';
  public passwordValue: string = '';
  public passwordConfirmedValue: string = '';
  

  @Output() changeFormLogin: EventEmitter<any> = new EventEmitter();

  handleRegisterClick() {
    
  } 
  handleLoginClick(){
    this.changeFormLogin.emit();
  }
}
