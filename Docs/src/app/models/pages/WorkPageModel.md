# WorkPageModel
Note que esse modelo, apesar de referir a Work, usa Artifact como modelo principal. Isso é porque Series e Universes são, na prática, Artifacts com menos coisas. Talvez faça sentido Ter uma classe-base Work e derivar Artifact dela.
## Typescript
- work:[Artifact](/Docs/src/app/models/artifacts/Artifact.md)
- participants:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
- relatedWorks:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
- newsAndHighlights:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)
- fractions:[VisualLabelLink[]](/Docs/src/app/models/VisualLabelLink.md)