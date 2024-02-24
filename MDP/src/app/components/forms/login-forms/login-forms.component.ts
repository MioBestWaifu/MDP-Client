import { Component, Output ,EventEmitter} from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'mdp-login-forms',
  
  
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.scss'
})
export class LoginFormsComponent extends BaseComponent{
  public emailValue: string = '';
  public passwordValue: string = '';

  @Output() changeFormRegister: EventEmitter<any> = new EventEmitter();

  handleLoginClick(){
    //pegar os inputs e checar
  }
  handleRegisterClick(){
    this.changeFormRegister.emit();
  }
}
