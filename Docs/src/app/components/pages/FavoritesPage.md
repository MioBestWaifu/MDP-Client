# FavoritesPageComponent

## Template
Uma div de classe [contentWrapper](/Docs/src/Styles.md#.contentWrapper) ou [portaraitContentWrapper](/Docs/src/Styles.md#.contentWrapperPortrait) envolvendo uma div de id #main e classe [verticalFlex](/Docs/src/Styles.md#.verticalFlex) no slot esquerdo da grid e, se não é portrait, um [mdp-ad-list](/Docs/src/app/components/structure/AdList.md) no lado direito. A #main contém um select com as possibilidades de agrupamento de favoritos (midia, categoria, etc) e uma série de divs com o label do agrupamento e uma [mdp-artifact-list](/Docs/src/app/components/structure/ArtifactList.md); o *onChange* do select chama **RegroupArtifacts()**; as divs são geradas por um loop nos pares das *keys* em *groupedArtifacts* e a propriedade *artifacts* da ArtifactList é setada com o *value* do par.  
## Typescript
groups: string[]<br><br>
allFavorites: Artifact[]<br><br>
groupedArtifacts: Dictionary<br>
[Dictionary](/Docs/src/app/classes/Dictionary.md) contendo como keys strings representado o nome do sub-agrupamento e como values um array de [Artifact]
## ngOnInit
Chama o **loadArtifacts** do *connection* e carrega os resultados em allFavorites. 
## RegroupArtifacts
Repopula *groupedArtifacts* com o novo critério. Usa as propriedades da própria classe [Artifact](/Docs/src/app/models/artifacts/Artifact.md) para isso.
## Styles
### \#main 
- width: 95%
- margin: 0 auto
- align-items: center