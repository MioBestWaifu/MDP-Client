# NavigationBarComponent
Barra lateral de navegação
## Template
Uma div de id #container e classe [vertical-flex](/Docs/src/Styles.md#verticalflex) englobando uma série de divs de classe .navBlock. Essas divs contém um ícone e um label, e clicadas levam para a página relevante. Essas divs são hardcoded. 
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
## Styles
*import [Variables](/Docs/src/Variables.md)*
### \#container 
### .navBlock
- background-color: $mediumMainColor
- border-bottom-width: 1px
- border-color: $strongBackgroundColor
- width: 100%
- flex: 1
- hover:
    - cursor: pointer
    - background-color: $lightMainColor
### i
- font-size: $largeFontSize
- color: $strongBackgroundColor

### p
- font-color: $strongBackgroundColor
- font-size: $largeFontSize