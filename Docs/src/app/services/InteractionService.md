# InteractionService
- baseURL = "yancosta.online/mdp/api/"
- rate = bareURL +  "rate/"
- rateUser = rate + "user"
- ratePerson = rate + "person"
- rateCompany = rate + "company"
- rateWork = rate + "work"
## Rate(url:string,rating:number, id:number)
Usa o angular http para dar patch no recurso com id = id (isso é um query param), usando o url como destino e Utils.token como bearer.