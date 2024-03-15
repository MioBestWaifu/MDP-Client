import { Component, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'mdp-register-forms',


  templateUrl: './register-forms.component.html',
  styleUrl: './register-forms.component.scss'
})
export class RegisterFormsComponent {
   @Output() changeFormLogin: EventEmitter<void> = new EventEmitter();
   hide = true;

  firstFormGroup = this._formBuilder.group({
    username: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    confirmedPassword: ['',Validators.required]
    
    
  });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  isLinear = true;
  constructor(private _formBuilder: FormBuilder) {}
}

