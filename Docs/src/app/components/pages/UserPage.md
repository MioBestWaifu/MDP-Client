# UserPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um [mdp-user-widget](/Docs/src/app/components/widgets/UserWidget.md), com *user* setado para *this.pageModel.user* e um [mdp-user-interactions-widget](/Docs/src/app/components/widgets/UserInteractionsWidget.md) com *allInteractions* setado para *this.pageModel.interactions*, nessa ordem.
## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
public pageModel:[UserPageModel](/Docs/src/app/models/pages/UserPageModel.md)<br><br>
### ngOnInit()
Chama o loadPage do this.connection e passa o resultado para this.pageModel
## Styles