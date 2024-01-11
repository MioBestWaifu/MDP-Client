# HorizontalFolderComponent
## Template
Uma div de classe [.collapsableHorizontal] englobando um i de chevron inicialmente para baixo e *click* = **Toggle()** e um ng-content, nessa ordem. A div principal tem o trigger *@expandCollapse* como {value: expanded? expanded : collapses, params: {maxWidth: maxWidth}}
## Typescript
### Animation
- trigger: expandCollapse
    - state: collapsed
        - width: 10px 
    - state: expanded
        - height: {{maxWidth}}px
        - params: {maxWidth: 10 (placeholder, o real valor vem do html pai via a propriedade maxWidth)}
    - transition: collapsed <=> expanded
        - 150ms
### Propriedades
- Input() maxWidth:number
- expanded:boolean = false
### Toggle()
inverte expanded
## Styles: [FolderStyles]