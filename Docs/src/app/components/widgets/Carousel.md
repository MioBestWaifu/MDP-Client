# CarouselComponent

## Template
Uma div de id #container englobando uma img cujo source é *imgUrl* links na posição *currentLink* e quando clicada leva para o *redirectTo* do mesmo. Além disso, posssui um [mdp-timer] com seu *secondPassed* setado para **SecondPassed()**.  
## Typescript
currentLink:number<br>
secondsPassed:number<br>
secondsUntilSwitching:number = 5<br>
links:[VisualLabelLink\[\]](/Docs/src/app/models/VisualLabelLink.md)<br><br>
### SecondPassed()
Aumenta o secondsPassed em um. Se chegou em secondsUntilSwitching, zera secondsPassed e aumenta currentLink em 1, ou volta a 0, caso este esteja no último link.
## Styles
### \#container
- width: 100%
- height: 100%
- background-color: REVISAR CORES
### mdp-timer
- display: none
### img
- min-height: 100%
- max-heigt: 100%
- aspect-ratio: maintain