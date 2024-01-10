# ReviewsListComponent
Não é scrollável. Passar uma quantidade adequada de reviews.
## Template
Possui uma div de id #main e classe \(if *vertical*:[verticalFlex](/Docs/src/Styles.md#verticalflex)\). A #main contem um [mdp-review-card](/Docs/src/app/components/cards/ReviewCard.md) de classe \(if *vertical*:.margin) para cada interaction em *reviews*.
## Typescript
Input() vertical:boolean = false
Input() reviews:Interaction[]

## Styles
### \#main
- display: flex
- justify-content: space-evenly
- align-items: center
### .margin
- margin-top: 10px 