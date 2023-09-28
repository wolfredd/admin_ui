import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, map } from 'rxjs';

import { Env } from '../utilities/environment';
import { RequestBody, RequestResponse } from '../utilities/interfaces';

import parseResponse from '../utilities/helpers/response-parser';
import Pages from '../utilities/pages';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = `${Env.baseUrl}/auth/admin/authenticate`

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(data: RequestBody): Observable<RequestResponse> {
    return parseResponse(this.http.post<Response>(this.endpoint, data));
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([Pages.auth])
  }
}
