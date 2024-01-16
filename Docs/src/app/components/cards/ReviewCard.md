# ReviewCardComponent

## Template
Uma div de classe [wrapper](/Docs/src/app/components/cards/CardStyles.md#wrapper) englobando uma img de classe[roundedImage](/Docs/src/Styles.md#roundedimage) e *src* = *review.user.cardImageUrl* e uma outra div. Essa segunda div possui um [RateWidget](/Docs/src/app/components/widgets/RateWidget.md) de classe [cardTopText](/Docs/src/app/components/cards/CardStyles.md#cardtoptext) e *rate* = *review.rating* e um p de classe [cardBlockText](/Docs/src/app/components/cards/CardStyles.md#cardblocktext) e conteúdo = *review.comment*.
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- Input() review:[Interaction]
## Styles: [CardStyles](/Docs/src/app/components/cards/CardStyles.md)