# HorizontalFolderComponent
Isso aq está feito para ser usado apenas pela lateral bar. Se afor usar em algum outro lugar, mudar esses width de porcentagem.
## Template
Uma div de classe [.collapsableHorizontal] englobando um i de chevron inicialmente para baixo e *click* = **Toggle()** e um ng-content, nessa ordem. A div principal tem o trigger *@expandCollapse* como {value: expanded? expanded : collapsed}
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*
### Animation
- trigger: expandCollapse
    - state: collapsed
        - width: 10px 
    - state: expanded
        - width: 100%
    - transition: collapsed <=> expanded
        - 150ms
### Propriedades
- Input() expanded:boolean = false
- Output() animationTriggered: EventEmitter\<void\>
### Toggle()
inverte expanded e emite animationTriggered
## Styles: [FolderStyles]