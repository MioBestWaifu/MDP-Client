# InterestUpdatePageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém uma série de divs agrupando [mdp-interest-card](/Docs/src/app/components/cards/InterestCard.md) por área (midia, genero, etc), essas divs são criadas em um for pelas keys do *pageModel.interestDictionary* e populadas com um for pelos values da key do mesmo; essas divs tem um label indicando um interest e uma div de classe interestList, que efetivamente agrupam os cards.
## Typescript
- pageModel: [InterestPageModel](/Docs/src/app/models/pages/InterestUpdatePageModel.md)<br>
### ngOnInit()
Chama o loadPage do this.connection e passa o resultado para this.pageModel
## Styles
### .interestList
- display: flex
- justify-content: space-evenly