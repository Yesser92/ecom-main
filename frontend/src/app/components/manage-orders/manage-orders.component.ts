import { Component } from '@angular/core';
import OrdersService from '../../services/order-service.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
  orders:any;
  constructor(private ordersService: OrdersService) { }
  ngOnInit(): void {
      this.ordersService.getOrderDATA().subscribe((data)=>{
        this.orders = data;
      })
  }
}
