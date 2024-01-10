# ArtifactListComponent

## Template
Possui uma div de id #main e classe \(if *vertical*:[verticalFlex](/Docs/src/Styles.md#verticalflex)\). A #main contem um [mdp-artifact-card](/Docs/src/app/components/cards/ArtifactCard.md) para cada artifact em *artifacts*.
## Typescript
Input() vertical:boolean = false
Input() artifacts:Artifact[]

## Styles
### \#main
- width: 100%
- display: flex
- justify-content: start
### mdp-artifact-card
- margin-left: 30px