import { Component, OnInit } from '@angular/core';
import OrdersService from '../../services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderData:any;
  constructor(private ordersService: OrdersService) { }
  ngOnInit(): void {
      this.ordersService.getOrderDATA().subscribe((data)=>{
        this.orderData = data;
      })
  }
}
