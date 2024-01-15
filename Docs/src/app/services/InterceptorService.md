# AuthInterceptorService
*implements HttpInterceptor*
## intercept (req: HttpRequest<any>, next: HttpHandler)
Verifica se Utils.token não é undefined e Utils.token.expiration > timestamp atual e, se não for, chama [AutenticatorService](/Docs/src/app/services/AutenticatorService.md).Authenticate() e carrega o resultado em Utils.token. Então, adiciona Utils.token.content como bearer da req.