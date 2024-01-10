# Artifact
## Typescript
- id:number<br>
- shortName:string<br>
- fullName:string<br>
- otherNames:string[]<br>
- description:string<br>
- media:string<br>
- categories:string[]<br>
- targetDemographics:string[]<br>
- ageRating:string<br>
- cardImgUrl:string
- mainImgUrl:string
- otherImgUrls:string[]
- mainParticipantRole:string<br>Essa propriedade e a seguinte servem para mostrar ao usuário a figura mais importante na criação deste artefato, que varia de acordo com a mídia (anime é estúdio, livro é autor, etc).
- mainParticipant:string
- averageRating:number<br>
- releaseDate:Date<br><br>
## Outras propriedades
Essas são propriedades que não ficam na classe em si mas precisam estar linkadas com a mesma no banco/backend:
- Pessoas relacionadas
- Companias relacionadas
- Série de que faz parte
- Universo de que faz parte
- Outros artifacts relacionados