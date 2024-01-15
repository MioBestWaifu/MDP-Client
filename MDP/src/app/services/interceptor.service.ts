import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticatorService } from './authenticator.service';
import { CommonContainerService } from './common-container.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authenticatorService: AuthenticatorService, private common:CommonContainerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.common.token == undefined || this.common.token.expiration > Date.now()) {
      this.authenticatorService.Authenticate().subscribe(token => {
        this.common.token = token;
      });
    }
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.common.token.content}`)
    });
    return next.handle(clonedReq);
  }
}