# FavoritesPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um select com as possibilidades de agrupamento de favoritos (midia, categoria, etc) e uma série de divs com o label do agrupamento e uma [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md); o *onChange* do select chama **RegroupArtifacts()**; as divs são geradas por um loop nos pares das *keys* em *pageModel.groupedArtifacts* e a propriedade *artifacts* da ArtifactList é setada com o *value* do par.  
## Typescript
*extends [BasePageComponent](/Docs/src/app/components/pages/BasePage.md)*<br><br>
public pageModel:[FavoritesPageModel](/Docs/src/app/models/pages/FavoritesPageModel.md)
## ngOnInit
Chama o LoadPage do connection e carrega os resultados em pageModel. 
## RegroupArtifacts
Repopula this.pageModel.groupedArtifacts com o novo critério. Para isso, chama [Utils.GroupArtifacts()](/Docs/src/app/classes/Utils.md#groupartifactsgroupbystringbaseartifactsartifact-dictionary).
## Styles
### \#main 
- width: 95%
- margin: 0 auto
- align-items: center