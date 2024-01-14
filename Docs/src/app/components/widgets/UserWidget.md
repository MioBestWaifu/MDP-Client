# WidgetComponent

## Template
Uma div de classe [summaryGrid](/Docs/src/app/components/widgets/WidgetStyles.md#summarygridt) contendo uma img (row 1 span 2) de *src* = *user.mainImgUrl*, uma div de classes [titleText](/Docs/src/app/components/widgets/WidgetStyles.md#titletext) e [centerInternalText](/Docs/src/Styles.md#centerinternaltext) e conteúdo *user.fullName* e uma div de classe [flexbox], essa última contendo uma série de informações relevantes a serem determinadas REVISAR, cada uma das quais em uma div de classe [summaryBlockTextContainer](/Docs/src/app/components/widgets/WidgetStyles.md#summaryblocktextcontainer), cada uma das quais possuindo dois p's, um de classe [mainBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#mainblocktext) e outro de classe [secondaryBlockText](/Docs/src/app/components/widgets/WidgetStyles.md#secondaryblocktext).
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- Input() user:[User](/Docs/src/app/models/User.md)
- connection:[InteractionService](/Docs/src/app/services/InteractionService.md)

### RateChanged(newRate:number)
Chama connection.Rate(), passando connection.rateUser, newRate e user.id como parametros. 
## Styles