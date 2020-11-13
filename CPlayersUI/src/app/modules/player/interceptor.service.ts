import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest,  HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes('http://localhost')){
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });}

    return next.handle(request);
 
  }
}
