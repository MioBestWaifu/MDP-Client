# BasicCompanyWidgetComponent

## Template
Uma div de classe [summaryGrid](/Docs/src/app/components/widgets/WidgetStyles.md#summarygridt) contendo uma img (row 1 span 2) de *src* = *company.mainImgUrl*, uma div de classes [titleText](/Docs/src/app/components/widgets/WidgetStyles.md#titletext) e [centerInternalText](/Docs/src/Styles.md#centerinternaltext) e conteúdo *company.fullName* e uma div de classe [twoColumnsGrid], essa última contendo na esquerda um [RateWidget](/Docs/src/app/components/widgets/RateWidget.md) de *rate* = *company.averageRating* e class em cima de um [RateControl] com *rated* = **RateChanged()** e na direita uma outra div de classe [flexbox], essa última contendo uma série de informações relevantes a serem determinadas REVISAR, cada uma das quais em uma div de classe [summaryBlockTextContainer](/Docs/src/app/components/widgets/WidgetStyles.md#summaryblocktextcontainer), cada uma das quais possuindo dois p's, um de classe [mainBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#mainblocktext) e outro de classe [secondaryBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#secondaryblocktext).
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- Input() company:[Company](/Docs/src/app/models/Company.md)
### RateChanged(newRate:number)
Chama o connection (qual? um user interaction global? REVISAR SERVICES REVISAR CONNECTIONS) e aplica a nova rating. 
## Styles