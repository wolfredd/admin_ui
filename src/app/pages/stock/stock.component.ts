import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock';
import { StockService } from 'src/app/services/stock.service';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  stocks: Stock[] = [];
  portfolioId:number = 0;
  portfolioName:string = "";
  clientFullName:string ="";

  constructor(private stockService: StockService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {console.log(params); // { orderby: "price" }
        this.portfolioId = params['portfolioId'];
        this.portfolioName = params['portfolioName'];
        this.clientFullName = params['clientFullName'];
        console.log(this.portfolioId); // price
      }
    );
    this.stockService.getStocks(this.portfolioId).subscribe(value => {this.stocks = value});
  }

  viewStocks(portfolioId : number){
    this.stockService.getStocks(portfolioId).subscribe(value => {this.stocks = value});
    
  }


  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

}
