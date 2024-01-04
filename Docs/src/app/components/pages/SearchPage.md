# SearchPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém: uma [mdp-search-bar](/Docs/src/app/components/structure/SearchList.md), um [mdp-search-filter](/Docs/src/app/components/controls/SearchFilter.md) e uma e um [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md), nessa ordem.
## Typescript

## Styles
### mdp-search-filter
- float: left

### mdp-search-bar
- margin: 0 auto