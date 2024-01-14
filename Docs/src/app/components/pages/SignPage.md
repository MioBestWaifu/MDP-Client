# SignPageComponent

## Template
Um [mdp-login-forms](/Docs/src/app/components/forms/LoginForms.md) de id #login e classes \[.forms\], com sua propriedade *switchedToRegister* setada para **SwitchToRegister**. Um [mdp-register-forms](/Docs/src/app/components/forms/RegisterForms.md) de id #register e classes \[forms\], com sua propriedade *switchedToLogin* setada para **SwitchToLogin**.

## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
### SwitchToRegister()
Esconde o #login e mostra o #register.
### SwitchToLogin()
Esconde o #register e mostra o #login
## Styles
### \#register
- display: none 
### .forms
- position: absolute;
- top: 30%;
- left: 50%;
- transform: translate(-50%, 0);
