# PageLaodingService.ts
## Propriedades
- baseURL = "api.yancosta.online/mdp/"
- pages = "pages/"
- community = baseURL + pages + "community"
- company = baseURL + pages + "company"
- favorites = baseURL + pages + "favorites"
- home = baseURL + pages + "home"
- interestSetup = baseURL + pages + "interestSetup"
- interestUpdate = baseURL + pages + "interestUpdate"
- person = baseURL + pages + "person"
- search = baseURL + pages + "search"
- sign = baseURL + pages + "sign"
- user = baseURL + pages + "user"
- work = baseURL + pages + "work/"
- anime = work + "anime"
- book = work + "book"
- game = work + "game"
- manga = work + "manga"
- music = work + "music"
## Métodos
### LoadPage(page:string):BasePageModel
Usa um get do http do angular para retornar o valor na url page. 
### LoadPageWithParams(page:string, params:[Dictionary](/Docs/src/app/classes/Dictionary.md)):BasePageModel
Usa um get do http do angular para retornar o valor na url page + Utils.ResolveParams(params). 