# AuthInterceptorService
*implements HttpInterceptor*
## intercept (req: HttpRequest<any>, next: HttpHandler)
Verifica se common.token não é undefined e common.token.expiration > timestamp atual e, se não for, chama [AutenticatorService](/Docs/src/app/services/AutenticatorService.md).Authenticate() e carrega o resultado em common.token. Então, adiciona common.token.content como bearer da req.