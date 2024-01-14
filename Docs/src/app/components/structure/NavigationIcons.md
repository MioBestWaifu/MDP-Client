# NavigationIconsComponent
Os ícones que ficam no header.
## Template
Uma div de id #container englobando uma série de ícones clicáveis. O conteúdo e comportamento desses ícones está para ser definido, mas certamente incluirá o perfil do usuário. Provisoriamente, usar ícones quaisquer para fins de ilustração.
## Typescript

## Styles
### \#container
- display: inline-flex
- justify-content: space-between

### i
*import [Variables](/Docs/src/Variables.md)*
- color: $strongBackgroundColor
- font-size: $largeFontSize
- (hover): 
    - cursor: pointer