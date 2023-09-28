import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { TradeField } from '../models/TradeField';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrders(){
    const url = `http://localhost:8081/order/getallorders`

    console.log(this.http.get<TradeField[]>(url));

    return this.http.get<TradeField[]>(url);
    
  }
}
