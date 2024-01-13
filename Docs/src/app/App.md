# AppComponent

## Template
Uma div de classe [appWrapper](/Docs/src/Styles.md#.appWrapper) ou [appWrapperPortrait](/Docs/src/Styles.md#.appWrapperPortrait) envolvendo um [header](/Docs/src/app/components/structure/Header.md) com seu *lateralBarToggled* = **ToggleLateralBar()**, uma [navigation-bar](/Docs/src/app/components/structure/NavigationBar.md) e um router-outlet. A wrapper tem *@expandCollapese* = "expandedp": collapsed.
## Animation
- trigger: expandCollapse
    - state: collapsed
        - grid-template-columns: 0px auto
        - height: {{maxHeight}}px
        - params: {maxHeight: 10 (placeholder, o real valor vem do html pai via a propriedade maxHeight)}
    - state: expanded
        - grid-template-columns: {{start}} {{end}}
        - params: {start: 1px ,end:1px (placeholders, os reais valores vem das propriedades de mesmo nome)}
    - transition: collapsed <=> expanded
        - 150ms
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- expandLateralBar:boolean = true
- start:string = "250px"
- end:string = "auto"
### ngOnInit
expandLateralBar = false se portrait = true
### ToggleLateralBar
Inverte expandLateralBar. Se portrait, start = auto e end = 0px; senão start = 250px e end = auto.
## Styles
### mdp-header
- z-index: 99
### router-outlet
- z-index: 98
