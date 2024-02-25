import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-register-forms',


  templateUrl: './register-forms.component.html',
  styleUrl: './register-forms.component.scss'
})
export class RegisterFormsComponent extends BaseComponent {
  public usernameValue: string = '';
  public emailValue: string = '';
  public passwordValue: string = '';
  public passwordConfirmedValue: string = '';
  public passwordsDiffer: boolean = false;

  @Output() changeFormLogin: EventEmitter<any> = new EventEmitter();

  handleRegisterClick() {
    if (this.passwordValue == this.passwordConfirmedValue) {
      this.usernameValue;
      this.emailValue;
      this.passwordValue;

      this.passwordsDiffer = false;
    } else {
      this.passwordsDiffer = true;
    }
  }
  handleLoginClick() {
    this.changeFormLogin.emit();
  }
}
