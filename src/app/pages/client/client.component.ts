import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';

import { Client } from 'src/app/models/client.model';

import { Router } from '@angular/router';

import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientSearch: string = '';
  isLoading: Boolean = true;
  data: Client[] = [];
  clients: Client[] = [];

  constructor(private clientService: ClientService, private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void {
    this.getAllClients();
    this.getToken();
  }

  getAllClients() {
    this.clientService.get().subscribe((response) => {
      this.clients = response;
      this.data = response;
      this.isLoading = false;
    });
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"

  iconSignOut = faSignOut
  iconBell = faBell

  onChange(event: Event) {
    this.clientSearch = (event.target as HTMLInputElement).value;
  }

  search() {
    this.clients = this.data.filter((value: Client) => {
      const search = this.clientSearch.toLowerCase();

      let compoundTest = value.firstName.toLowerCase().includes(search);
      compoundTest = compoundTest || value.lastName.toLowerCase().includes(search);

      return compoundTest;
    });
  }

  viewPortfolios(clientId: number, clientFirstName: string, clientLastName: string) {
    console.log("Searching for client's portfolios...")
    console.log(clientId)
    const details: number = clientId;
    const clientFullName: string = clientFirstName + " " + clientLastName

    // this.portfolioComponent.viewPortfolios(clientId);

    this.router.navigate([`/portfolios/${clientId}/${clientFullName}`] );
    };

    getToken() {
      console.log(localStorage.getItem('token'));
      return localStorage.getItem('token');
    }

}