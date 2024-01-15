# CompanyPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é mediaQuery.portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um [mdp-basic-company-widget](/Docs/src/app/components/widgets/BasicCompanyWidget.md) e dois [mdp-visual-label-link-list-widget](/Docs/src/app/components/widgets/VisualLabelLinkListWidget.md) englobados em [mdp-vertical-folder](/Docs/src/app/components/controls/folder/VerticalFolder.md), um com seu *links* setado para *this.pageModel.artifactParticipations* e outro para *this.pageModel.affiliates*, e labels acima deles setados para "Worked in" e "Affiliates", respectivamente, nessa ordem
## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
public pageModel:[CompanyPageModel](/Docs/src/app/models/pages/CompanyPageModel.md)<br><br>
### ngOnInit()
Chama LoadPage do this.connection com parametro this.connection.company + o id no url  e passa o resultado para this.pageModel
## Styles