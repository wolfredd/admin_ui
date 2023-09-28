import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TradeField } from '../models/TradeField';

@Injectable({
  providedIn: 'root'
})
export class CancelledtradesService {
  constructor(private http: HttpClient) { }

  getAllTrades(){

    const url = `http://localhost:8081/order/cancelledorders`

    console.log(this.http.get<TradeField[]>(url));

    return this.http.get<TradeField[]>(url);
    
  }


}
