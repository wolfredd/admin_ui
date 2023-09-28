import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { TradeField } from 'src/app/models/TradeField';
import { PendingtradesService } from 'src/app/services/pendingtrades.service';

@Component({
  selector: 'app-pendingtrades',
  templateUrl: './pendingtrades.component.html',
  styleUrls: ['./pendingtrades.component.css']
})
export class PendingtradesComponent implements OnInit{

  pendingOrders: TradeField[] = []

  constructor(private pendingTradesService: PendingtradesService,  private router: Router) { }
  ngOnInit(): void {
    this.pendingTradesService.getAllTrades().subscribe((response) => {this.pendingOrders = response;});
  }


  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell
}
