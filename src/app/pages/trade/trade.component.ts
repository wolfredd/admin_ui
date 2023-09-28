import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeService } from 'src/app/services/trade.service';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Trades } from 'src/app/models/Trades';


@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit{

  trades: Trades[] = [];

  constructor(private tradesService: TradeService, private router: Router) {}

  ngOnInit(): void {
    this.tradesService.getAllTrades().subscribe(value => {this.trades = value});
    console.log(this.trades);
  }


  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

  

}
