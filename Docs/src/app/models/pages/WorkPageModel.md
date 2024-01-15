# WorkPageModel
Note que esse modelo, apesar de referir a Work, usa Artifact como modelo principal. Isso é porque Series e Universes são, na prática, Artifacts com menos coisas. Talvez faça sentido Ter uma classe-base Work e derivar Artifact dela.
## Typescript
*extends [BasePageModel](/Docs/src/app/models/pages/BasePageModel.md)*
- work:[Artifact](/Docs/src/app/models/artifacts/Artifact.md)
- participants:[Link[]](/Docs/src/app/models/Link.md)
- relatedWorks:[Link[]](/Docs/src/app/models/Link.md)
- newsAndHighlights:[Link[]](/Docs/src/app/models/Link.md)
- fractions:[Link[]](/Docs/src/app/models/Link.md)