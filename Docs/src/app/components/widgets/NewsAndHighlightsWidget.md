# NewsAndHiglightsWidgetComponent
## Template
Um loop pelos *links* criando divs contendo dois p's, um de classe .newsTitle e conteúdo *iteration.mainLabel* e outro de counteúdo *iteration.secondaryLabel*. Dentro do último há uma img de src *iteration.imgUrl*. Clicar na img ou no título redireciona para *iteration.redirecTo*
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- links:[Link[]](/Docs/src/app/models/Link.md)
## Styles
*import [Variables](/Docs/src/Variables.md)*
### .newsTitle
- font-size: $largeFontSize
- color: $mediumMainColor 
### div
- border-bottom-width: 1px
- border-color: $strongBackgroundColor
### img
- float: left