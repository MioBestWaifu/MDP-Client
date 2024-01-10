# PersonPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um [mdp-basic-person-widget](/Docs/src/app/components/widgets/BasicPersonWidget.md) e dois [mdp-visual-role-link-widget](/Docs/src/app/components/widgets/VisualLabelLinkWidget.md), um com seu *links* setado para *this.pageModel.artifactParticipations* e outro para *this.pageModel.companyAffiliations*, e seus *label* setado para "Worked in" e "Affiliations", respectivamente, nessa ordem
## Typescript
*extends BasePageComponent*<br><br>
public pageModel:[PersonPageModel](/Docs/src/app/models/pages/PersonPageModel.md)<br><br>
### ngOnInit()
Chama o loadPage do this.connection e passa o resultado para this.pageModel
## Styles