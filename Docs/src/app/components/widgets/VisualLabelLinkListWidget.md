# VisualLabelLinkListWidgetComponent

## Template
Uma div de classe .flexbox englobando uma lista de divs de classe .flexbox e ngClass = \(if portrait or forceSmallBlock: smallBlock, else block\), geradas com um for nos *links*. Essas divs possuem uma img de *src* = *iteration.imgUrl* e link para *iteration.redirectTo* e uma div contendo dois p's, um com o *iteration.mainLabel* e classe [mainBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#mainblocktext) e outro com *iteration.secondaryLabel* e classe [secondaryBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#secondaryblocktext).
## Typescript
- Input() links:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
- Input() forceSmallBlock:bolean = false
## Styles: [WidgetStyles](/Docs/src/app/components/widgets/WidgetStyles.md)
### .secondaryBlockText
- hover:
    - cursor: pointer
    - text-decoration: underline
### .block
Essa borda provavelmente não vai ficar tão legal, mas alguma borda provavelmente é necessária. Revisar isso. 
- border-width: 0px 1px 1px 0px
- border-color: $strongBackgroundColor
- width: 150px
- height: 100px
### .smallBlock
*extends block*
- width: 110px
### .flexbox
- display: flex
### .block .flexbox
- justify-content: space-between
### .block .flexbox
- justify-content: space-between