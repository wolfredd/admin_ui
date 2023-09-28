import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TradeField } from '../models/TradeField';

@Injectable({
  providedIn: 'root'
})
export class FilledtradesService {
  constructor(private http: HttpClient) { }

  getAllTrades(){

    const url = `http://localhost:8081/order/filledorders`

    console.log(this.http.get<TradeField[]>(url));

    return this.http.get<TradeField[]>(url);
    
  }
}
