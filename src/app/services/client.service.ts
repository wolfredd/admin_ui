import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Env } from '../utilities/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private endpoint = `${Env.baseUrl}/admin/getallclients`

  constructor(private http: HttpClient) { }


  getClients(){

  }


  get(id?: Number) {
    console.log(localStorage.getItem("token"));
    return this.http.get<Client[]>(this.endpoint);
  }

  getToken() {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
}







 

