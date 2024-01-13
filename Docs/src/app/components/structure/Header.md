# HeaderComponent

## Template
Uma div de id #container englobando uma div com um i para o menu lateral com *click* = **ToggleLateralBar()** [mdp-small-logo](/Docs/src/app/components/SmallLogo.md)\(if:portrait\) ou [mdp-full-logo](/Docs/src/app/components/FullLogo.md)\(else\) e um [mdp-navigation-icons].
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- lateralBarToggled:EventEmitter\<void\><br><br>
### ToggleLateralBar()
Emite lateralBarToggled
## Styles
### \#container
- display:flex
- justify-content: space-between
- background-color: REVISAR CORES