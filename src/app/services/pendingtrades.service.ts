import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Env } from '../utilities/environment';
import parseResponse from '../utilities/helpers/response-parser';
import { Client } from '../models/client.model';
import { Trades } from '../models/Trades';
import { TradeField } from '../models/TradeField';

@Injectable({
  providedIn: 'root'
})
export class PendingtradesService {
  constructor(private http: HttpClient) { }

  getAllTrades(){
    const url = `http://localhost:8081/order/pendingorders`

    console.log(this.http.get<TradeField[]>(url));

    return this.http.get<TradeField[]>(url);
    
  }


}