import { Component, OnInit } from '@angular/core';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TradeField } from 'src/app/models/TradeField';
import { FilledtradesService } from 'src/app/services/filledtrades.service';


@Component({
  selector: 'app-cancelledtrades',
  templateUrl: './filledtrades.component.html',
  styleUrls: ['./filledtrades.component.css']
})
export class FilledtradesComponent implements OnInit{
  
  filledOrders: TradeField[] = []
  
  constructor(private filledTradesService: FilledtradesService,  private router: Router) { }
  ngOnInit(): void {
    this.filledTradesService.getAllTrades().subscribe((response) => {this.filledOrders = response;});
  }

  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell
}
