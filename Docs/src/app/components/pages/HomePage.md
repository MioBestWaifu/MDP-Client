# HomePageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém: uma [mdp-search-bar](/Docs/src/app/components/controls/SearchBar.md) , um [mdp-carousel](/Docs/src/app/components/widgets/Carousel.md), com seu *links* setado para *pageModel.newsAndHighlights*  e uma um [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md) com seu *artifacts* setado para *this.pageModel.artifacts* , nessa ordem
## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
public pageModel:[HomePageModel](/Docs/src/app/models/pages/HomePageModel.md)<br><br>
### ngOnInit()
Chama o LoadPage do this.connection com parametro this.connection.home e passa o resultado para this.pageModel
## Styles
### \#main 
- width: 95%
- margin: 0 auto
- align-items: center
