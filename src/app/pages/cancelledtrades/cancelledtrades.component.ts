import { Component, OnInit } from '@angular/core';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TradeField } from 'src/app/models/TradeField';
import { CancelledtradesService } from 'src/app/services/cancelledtrades.service';


@Component({
  selector: 'app-cancelledtrades',
  templateUrl: './cancelledtrades.component.html',
  styleUrls: ['./cancelledtrades.component.css']
})
export class CancelledtradesComponent implements OnInit{
  
  cancelledOrders: TradeField[] = []
  
  constructor(private cancelledTradesService: CancelledtradesService,  private router: Router) { }
  ngOnInit(): void {
    this.cancelledTradesService.getAllTrades().subscribe((response) => {this.cancelledOrders = response;});
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell
}
