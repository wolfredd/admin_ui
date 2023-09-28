// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { ClientService } from "../services/client.service";


// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//     constructor(private authClientService: ClientService) {}


//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const authToken = localStorage.getItem("token");
//         req = req.clone(
//             {
//                 setHeaders: {
//                     Authorization: "Bearer " + authToken
//                 }
//             }
//         );
//         return next.handle(req);
//     }
    
// }


import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (request.url.includes('/api/v1/auth/register')) {
      return next.handle(request);
    }

    // Clone the request and add the token to the headers
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}