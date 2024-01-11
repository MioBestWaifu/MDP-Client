# VisualLabelLinkListWidgetComponent

## Template
Uma div de classe .flexbox englobando uma lista de divs de classe .block e .flexbox, geradas com um for nos *links*. Essas divs possuem uma img de *src* = *iteration.imgUrl* e link para *iteration.redirectTo* e uma div contendo dois p's, um com o *iteration.mainLabel* e classe .mainLabel e outro com *iteration.secondaryLabel* e classe .secondaryLabel.
## Typescript
- Input() links:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
## Styles
### .mainLabel
- font-size: REVISAR FONTES
- color: REVISAR FONTES REVISAR CORES
### .secondaryLabel
- font-size: REVISAR FONTES
- color: REVISAR FONTES REVISAR CORES
### .block
Essa borda provavelmente não vai ficar tão legal, mas alguma borda provavelmente é necessária. Revisar isso. 
- border-width: 0px 1px 1px 0px
- border-color: REVISAR CORES
### .flexbox
- display: flex
### .block .flexbox
- justify-content: space-between