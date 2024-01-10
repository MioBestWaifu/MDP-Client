# WorkPageComponent
Supõe-se que essa classe nunca será inicializada, mas que suas subclasses serão, apesar de não serem diferenciadas na URL.
## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait,  uma [mdp-reviews-list](/Docs/src/app/components/structure/ReviewsList.md) no lado direito com seu *reviews* setado para *pageModel.reviews*, se for portrait, o ReviewsList vai para a div main, no final. A #main contém um [mdp-basic-work-widget](/Docs/src/app/components/widgets/BasicWorkWidget.md) com seu *work* setado para *this.pageModel.work*, um [mdp-news-and-highlights-widget](/Docs/src/app/components/widgets/NewsAndHighlightsWidget.md), um [mdp-fractions-widget](/Docs/src/app/components/widgets/FractionsWidget.md) \(if *showFractions*\), com seu *fractions* setado para *this.pageModel.fractions* e dois [mdp-visual-label-link-widget](/Docs/src/app/components/widgets/VisualLabelLinkWidget.md) com seus *label* setados para "Participants" e "Related {media}" e seus *links* setados para *pageModel.participants* e *pageModel.relatedWorks*,respectivamente, nessa ordem.
## Typescript
*extends BasePageComponent*<br><br>
public pageModel: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)<br><br>
### ngOnInit()
Chama o loadPage do this.connection e passa o resultado para this.pageModel
## Styles