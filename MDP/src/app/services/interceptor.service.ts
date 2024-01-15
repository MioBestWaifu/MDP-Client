import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatorService } from './authenticator.service';
import { Utils } from '../classes/utils';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authenticatorService: AuthenticatorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (Utils.token || Utils.token.expiration > Date.now()) {
      this.authenticatorService.Authenticate().subscribe(token => {
        Utils.token = token;
      });
    }
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${Utils.token.content}`)
    });
    return next.handle(clonedReq);
  }
}