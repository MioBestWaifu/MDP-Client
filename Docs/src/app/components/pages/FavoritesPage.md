# FavoritesPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é mediaQuery.portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um select com as possibilidades de agrupamento de favoritos (midia, categoria, etc) e uma série de divs com um p e uma [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md); o *onChange* do select chama **RegroupArtifacts($event)**; as divs da #main são geradas por um loop nos pares das *keys* em *pageModel.groupedArtifacts* e a propriedade *artifacts* da ArtifactList de cada div é setada com o *value* do par, e o counteúdo do p é a iteração de key.  
## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
public pageModel:[FavoritesPageModel](/Docs/src/app/models/pages/FavoritesPageModel.md)
## override ngOnInit
Chama LoadPage do this.connection com parametro this.connection.favorites e carrega os resultados em pageModel. 
## RegroupArtifacts(event: Event)
Repopula this.pageModel.groupedArtifacts com o novo critério. Para isso, chama [Utils.GroupArtifacts()](/Docs/src/app/classes/Utils.md#groupartifactsgroupbystringbaseartifactsartifact-dictionary), usando como parametros o value do event e this.pageModel.allFavorites
## Styles
### \#main 
- width: 95%
- margin: 0 auto
- align-items: center