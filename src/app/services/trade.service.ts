import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Env } from '../utilities/environment';
import { Client } from '../models/client.model';
import { Trades } from '../models/Trades';




@Injectable({
  providedIn: 'root'
})
export class TradeService {

  constructor(private http: HttpClient) { }

  getClients(){
    const url=`${Env.baseUrl}auth/getallclients`;

    return this.http.get<Client[]>(url);
  }

  getAllTrades(){
    const url = `http://localhost:8083/marketdata/getallmarket`

    console.log(this.http.get<Trades[]>(url));

    return this.http.get<Trades[]>(url);
    
  }
}
