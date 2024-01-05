# SearchPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém: uma [mdp-search-bar](/Docs/src/app/components/controls/SearchBar.md), um [mdp-search-filter](/Docs/src/app/components/controls/SearchFilter.md) e uma e um [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md), com seu *artifacts* setado paara *this.pageModel.artifacts*, nessa ordem.
## Typescript
*extends BasePageComponent*<br><br>
query:string<br>
public pageModel:[SearchPageModel](/Docs/src/app/models/pages/SearchPageModel.md)<br><br>
### ngOnInit
Pega a query do URL e passa para this.query, seta a query do connection para this.query e chama o loadPage do connection, carregando o resultado no pageModel.
## Styles
### mdp-search-filter
- float: left

### mdp-search-bar
- margin: 0 auto