import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { User } from '../../../models/users/user';
import { AuthenticatorService } from '../../../services/authenticator.service';
import { Router } from '@angular/router';
import { CommonContainerService } from '../../../services/common-container.service';

@Component({
  selector: 'mdp-login-forms',


  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.scss'
})
export class LoginFormsComponent{
  public emailValue: string = '';
  public passwordValue: string = '';
  public invalidCredentials: boolean = false;

  @Output() changeFormRegister: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthenticatorService, private router: Router, private common: CommonContainerService) {
  }

  handleLoginClick() {
    const user = new User();
    user.email = this.emailValue;
    user.password = this.passwordValue;

    this.authService.Login(user).subscribe((data) => {
      if (data) {
        this.common.user = data;
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials!');
      }
    });
  }

  handleRegisterClick() {
    this.changeFormRegister.emit();
  }

  // invalidCredentials(){

  // }
  onSubmit() {
    this.handleLoginClick();
  }
}
