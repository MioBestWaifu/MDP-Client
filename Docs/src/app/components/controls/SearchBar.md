# SearchBarComponent

## Template
Um input de classe .searchBar, ngModel = query e *keydown.enter* = **Search()**
## Typescript
*extends [BaseComponent](/Docs/src/app/components/BaseComponent.md)*<br><br>
- query:string

### Search()
Navega para /search com params query = this.query
## Styles
### .searchBar
- width: inherit
- height: inherit