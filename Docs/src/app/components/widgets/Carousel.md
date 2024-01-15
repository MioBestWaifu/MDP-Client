# CarouselComponent

## Template
Uma div de id #container englobando uma img cujo source é *imgUrl* links na posição *currentLink* e quando clicada leva para o *redirectTo* do mesmo.  
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- currentLink:number
- secondsPassed:number
- secondsUntilSwitching:number = 5
- links:[Link[]](/Docs/src/app/models/Link.md)
- intervalId:number;
### ngOnInit
Chama super.ngOnInit(); Cria um window interval de um segundo para SecondPassed(), passando seu id para this.intervalId. 
### ngOnDestroy
Limpa o window interval de id = this.intervalId. 
### SecondPassed()
Aumenta o secondsPassed em um. Se chegou em secondsUntilSwitching, zera secondsPassed e aumenta currentLink em 1, ou volta a 0, caso este esteja no último link.
## Styles
*import [Variables](/Docs/src/Variables.md)*
### \#container
- width: 100%
- height: 100%
- background-color: $lightOutlineColor
### mdp-timer
- display: none
### img
- min-height: 100%
- max-heigt: 100%
- aspect-ratio: maintain