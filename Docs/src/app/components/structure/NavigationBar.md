# NavigationBarComponent
Barra lateral de navegação
## Template
Uma div de id #container e classe [vertical-flex](/Docs/src/Styles.md#verticalflex) englobando uma série de divs de classe .navBlock. Essas divs contém um ícone e um label e um link levando para a página relevante. Essas divs são hardcoded. 
## Typescript

## Styles
*import [Variables](/Docs/src/Variables.md)*
### \#container 
### .navBlock
- background-color: $mediumMainColor
- border-bottom-width: 1px
- border-color: $strongBackgroundColor
- width: 100%
- flex: 1

### i
- font-size: $largeFontSize
- color: $strongBackgroundColor