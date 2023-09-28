import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocks(portfolioId: number){

    const url = `http://localhost:8080/api/v1/stock/getstocks/${portfolioId}`
    const isLoggedIn = localStorage.getItem("token");

    

    console.log(this.http.get<Stock[]>(url));

    return this.http.get<Stock[]>(url);

  }



}
