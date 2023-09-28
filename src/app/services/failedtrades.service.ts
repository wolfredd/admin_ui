import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeField } from '../models/TradeField';

@Injectable({
  providedIn: 'root'
})
export class FailedtradesService {
  constructor(private http: HttpClient) { }

  getAllTrades(){

    const url = `http://localhost:8081/order/failedorders`

    console.log(this.http.get<TradeField[]>(url));

    return this.http.get<TradeField[]>(url);
    
  }
}
