# ArtifactCardComponent

## Template
Uma div de id #main e classe [collapsableGrid](/Docs/src/app/components/cards/CardStyles.md#collapsablegrid) englobando duas outras divs, #collapsedBlock e #expandedBlock, nessa ordem. A #main tem seu trigger *expandCollapse* setado como "expanded? expanded : collapsed". A #main tem *mouseenter* = **ToggleExpanded()** e *mouseleave* = **ToggelExpanded()**. A #collapsedBlock contém uma img de src *artifact.cardImgUrl* acima de um p de classe [cardMainText](/Docs/src/app/components/cards/CardStyles.md#cardmaintext) e conteúdo *artifact.shortName*. Quando a imagem é clickada, ela redireciona para "/*artifact.media*/*artifact.id*" A #expandedBlock contém uma série de p's: o primeiro tem conteúdo *artifact.media* e classe [cardTopText](/Docs/src/app/components/cards/CardStyles.md#cardtoptext), os demais tem classe [cardBlockText](/Docs/src/app/components/cards/CardStyles.md#cardblocktext) e conteúdo com o main participant, categorias, demografia alvo e parte da descrição, usando as propriedades adequadas do *artifact*. Antes da descrição, há um [RateWidget](/Docs/src/app/components/widgets/RateWidget.md) com *rate* = *artifact.averageRating*. A descrição é só uma parte da descrição total. 
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*
### Animation
- trigger: expandCollapse
    - state: collapsed
        - width: 150px
    - state: expanded
        - width: 350px
    - transition: collapsed <=> expanded
        - 250ms
### Propriedades
- expanded: boolean = false
- Input() artifact:[Artifact](/Docs/src/app/models/artifacts/Artifact.md)
### ToggleExpanded
Toggles expanded.
## Styles: [CardStyles](/Docs/src/app/components/cards/CardStyles.md)