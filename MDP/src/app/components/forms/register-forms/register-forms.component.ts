import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'mdp-register-forms',


  templateUrl: './register-forms.component.html',
  styleUrl: './register-forms.component.scss'
})
export class RegisterFormsComponent {
   @Output() changeFormLogin: EventEmitter<any> = new EventEmitter();
   hide = true;
  // public usernameValue: string = '';
  // public emailValue: string = '';
  // public passwordValue: string = '';
  // public passwordConfirmedValue: string = '';
  // public passwordsDiffer: boolean = false;

  // handleRegisterClick() {
  //   if (this.passwordValue == this.passwordConfirmedValue) {
  //     this.usernameValue;
  //     this.emailValue;
  //     this.passwordValue;

  //     this.passwordsDiffer = false;
  //   } else {
  //     this.passwordsDiffer = true;
  //   }
  // }
  // handleLoginClick() {
  //   this.changeFormLogin.emit();
  // }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isLinear = true;
  constructor(private _formBuilder: FormBuilder) {}
}

