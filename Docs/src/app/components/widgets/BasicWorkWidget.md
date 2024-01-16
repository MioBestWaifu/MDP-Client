# BasicWorkWidgetComponent

## Template
Uma div de classe [summaryGrid](/Docs/src/app/components/widgets/WidgetStyles.md#summarygridt) contendo uma img (row 1 span 2) de *src* = *work.mainImgUrl*, uma div de classes [titleText](/Docs/src/app/components/widgets/WidgetStyles.md#titletext) e [centerInternalText](/Docs/src/Styles.md#centerinternaltext) e conteúdo *work.fullName* e uma div de classe [twoColumnsGrid], essa última contendo na esquerda uma div contendo um [mdp-rate-widget](/Docs/src/app/components/widgets/RateWidget.md) de *rate* = *work.averageRating* e class em cima de um [mdp-rate-control] com *rated* = **RateChanged()**, e na direita uma outra div de classe [flexbox], essa última contendo uma série de informações relevantes a serem determinadas REVISAR, cada uma das quais em uma div de classe [summaryBlockTextContainer](/Docs/src/app/components/widgets/WidgetStyles.md#summaryblocktextcontainer), cada uma das quais possuindo dois p's, um de classe [mainBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#mainblocktext) e outro de classes [secondaryBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#secondaryblocktext) e [inline].
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- Input() work:[Artifact](/Docs/src/app/models/Artifact.md)
- connection:[InteractionService](/Docs/src/app/services/InteractionService.md)
### constructor (mediaQuery:MediaQueryService, common:CommonContainerService, public connection:[InteractionService](/Docs/src/app/services/InteractionService.md))
Também chama o constructor da super, obviamente
### RateChanged(newRate:number)
Chama o connection.Rate(), passando connection.rateUser, newRate e work.id como parametros.
## Styles