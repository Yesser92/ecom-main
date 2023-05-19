import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 class OrderServiceService {

  constructor(private http:HttpClient) { }
  getOrderDATA(){
    return this.http.get('http://localhost:3000/api/orders/');

  }
}
export default OrderServiceService