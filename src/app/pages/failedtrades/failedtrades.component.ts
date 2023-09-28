import { Component, OnInit } from '@angular/core';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TradeField } from 'src/app/models/TradeField';
import { FailedtradesService } from 'src/app/services/failedtrades.service';


@Component({
  selector: 'app-cancelledtrades',
  templateUrl: './failedtrades.component.html',
  styleUrls: ['./failedtrades.component.css']
})
export class FailedtradesComponent implements OnInit{
  
  failedOrders: TradeField[] = []
  
  constructor(private failedTradesService: FailedtradesService,  private router: Router) { }
  ngOnInit(): void {
    this.failedTradesService.getAllTrades().subscribe((response) => {this.failedOrders = response;});
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell
}
