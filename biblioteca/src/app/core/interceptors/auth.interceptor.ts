import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      
      if (token) {
        console.log('Interceptor: Token encontrado:', token);
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Interceptor: Request headers:', request.headers);
      }
    } else {
      console.warn('Interceptor: localStorage no está disponible en este entorno.');
    }

    return next.handle(request);
  }
}
