import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.handleAccess(request, next);
    }

    private handleAccess(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userData = localStorage.getItem('userData')
        if (userData) {
            const token = JSON.parse(userData).jwt;
            let changedRequest = request;
            // HttpHeader object immutable - copy values
            const headerSettings: { [name: string]: string | string[]; } = {};

            for (const key of request.headers.keys()) {
                headerSettings[key] = request.headers.getAll(key);
            }
            if (token) {
                headerSettings['Authorization'] = 'Bearer ' + token;
            }
            headerSettings['Content-Type'] = 'application/json';
            const newHeader = new HttpHeaders(headerSettings);

            changedRequest = request.clone({
                headers: newHeader
            });
            return next.handle(changedRequest);
        }
        return next.handle(request);
    }

}