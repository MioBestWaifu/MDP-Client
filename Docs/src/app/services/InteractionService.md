# InteractionService
- baseURL = "api.yancosta.online/mdp/"
- rate = bareURL +  "rate/"
- rateUser = rate + "user"
- ratePerson = rate + "person"
- rateCompany = rate + "company"
- rateWork = rate + "work"
## Rate(url:string,rating:number, id:number):Observable<void>
Usa o angular http para dar patch no recurso com id = id (isso é um query param), usando o url como destino e rating como payload.