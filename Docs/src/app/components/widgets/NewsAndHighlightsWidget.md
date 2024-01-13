# NewsAndHiglightsWidgetComponent
Um loop pelos *links* criando divs contendo dois p's, um de classe .newsTitle e conteúdo *iteration.mainLabel* e outro de classe .newsBlock e counteúdo *iteration.secondaryLabel*. Dentro do último há uma img de src *iteration.imgUrl*. Clicar na img ou no título redireciona para *iteration.redirecTo*
## Template
- links:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
## Typescript

## Styles
*import [Variables](/Docs/src/Variables.md)*
### .newsTitle
- REVISAR FONTES
### .newsBlock
- REVISAR FONTES
### div
- border-bottom-width: 1px
- border-color: $strongBackgroundColor
### img
- float: left