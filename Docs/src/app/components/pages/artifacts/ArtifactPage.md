# ArtifactPageComponent
Supõe-se que essa classe nunca será inicializada, mas que suas subclasses serão, apesar de não serem diferenciadas na URL.
## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um [mdp-basic-work-widget](/Docs/src/app/components/widgets/BasicWorkWidget.md), um [mdp-news-and-highlights-widget](/Docs/src/app/components/widgets/NewsAndHighlightsWidget.md), um [mdp-fractions-widget](/Docs/src/app/components/widgets/FractionsWidget.md) \(if *showFractions*\), um [mdp-work-relations](/Docs/src/app/components/widgets/WorkRelations.md) e uma [mdp-reviews-list](/Docs/src/app/components/structure/ReviewsList.md), nessa ordem.
## Typescript
*extends BasePageComponent*
## Styles