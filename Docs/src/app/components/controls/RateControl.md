# RateFilterComponent

## Template
Um i de classe "material-symbols-outlined icon" e conteúdo = "star" ao lado de select. Esse select tem como options os números de 0 a 10, além de um valor nulo.  Esse select tem *change* = **SelectionChanged($event)**
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- Output() rated:EventEmitter<number>
## SelectionChanged(event:Event)
Armazenda o value do event em uma const newRate. Emite rated com newRate. Emite -1 se a rating for removida.
## Styles