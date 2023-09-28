import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Portfolio } from 'src/app/models/Portfolio';
import { ClientService } from 'src/app/services/client.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  
  portfolios: Portfolio[] = [];
  clientId:number = 0;
  clientFullName:string ="";

  constructor(private portfolioService: PortfolioService, private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.params.subscribe(params => {console.log(params); // { orderby: "price" }
        this.clientId = params['clientId'];
        this.clientFullName = params['clientFullName'];
        console.log(this.clientId); // price
      }
    );
    this.portfolioService.getPortfolios(this.clientId).subscribe(value => {this.portfolios = value});
  }

  

  viewPortfolios(clientId : number){
    this.portfolioService.getPortfolios(clientId).subscribe(value => {this.portfolios = value});
    
  }

  viewstocks(portfolioId: number, portfolioName:string) {
    console.log("Searching for client's stocks...")
    console.log(portfolioId)
    const details: number = portfolioId;

    // this.portfolioComponent.viewPortfolios(clientId);

    this.router.navigate([`/stocks/${portfolioId}/${portfolioName}/${this.clientFullName}`] );
    
    };




  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

}