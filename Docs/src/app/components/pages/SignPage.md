# SignPageComponent

## Template
Um [mdp-login-forms] de id #login e classes \[forms\], com sua propriedade *switchedToRegister* setada para **SwitchToRegister**. Um [mdp-register-forms] de id #register e classes \[forms\], com sua propriedade *switchedToLogin* setada para **SwitchToLogin**.

## Typescript
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
