# VerticalFolderComponent
## Template
Uma div de classe [.collapsableVertical] englobando um i de chevron inicialmente para baixo e *click* = **Toggle()** e um ng-content, nessa ordem. A div principal tem o trigger *@expandCollapse* como {value: expanded? expanded : collapses, params: {maxHeight: maxHeight}}
## Typescript
### Animation
- trigger: expandCollapse
    - state: collapsed
        - height: 10px 
    - state: expanded
        - height: {{maxHeight}}px
        - params: {maxHeight: 10 (placeholder, o real valor vem do html pai via a propriedade maxHeight)}
    - transition: collapsed <=> expanded
        - 150ms
### Propriedades
- Input() maxHeight:number
- expanded:boolean = false
### Toggle()
inverte expanded
## Styles: [FolderStyles]