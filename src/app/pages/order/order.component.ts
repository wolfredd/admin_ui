import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { TradeField } from 'src/app/models/TradeField';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders: TradeField[] = [];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(value => {this.orders = value});
    console.log(this.orders);
  }


  className = "p-3 mx-4 text-gray-500 cursor-pointer rounded-md hover:bg-[#150050] hover:text-gray-50 transition duration-100 hover:duration-300 hover:ease-in ease-out"
  
  iconSignOut = faSignOut
  iconBell = faBell

}
