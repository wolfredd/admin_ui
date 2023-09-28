import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portfolio } from '../models/Portfolio';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolios(clientId: number) {

    const url = `http://localhost:8080/api/v1/portfolio/getportsbyid/${clientId}`
    const isLoggedIn = localStorage.getItem("token");

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${isLoggedIn}` });

    console.log(this.http.get<Portfolio[]>(url, { headers }));

    return this.http.get<Portfolio[]>(url);

  }

}
