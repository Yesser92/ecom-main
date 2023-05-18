import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() quantity!: number;
  public cartProducts: any[] = [];
  public grandTotal: number = 0;
  @Output() item: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  // addToCart(product: Product) {
  //   this.item.emit({ item: product, quantity: this.quantity });
  // }

  getCartProducts(): void {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      this.calculateGrandTotal();
    }
  }

  calculateGrandTotal() {
    let grandTotal = 0;
    for (let product of this.cartProducts) {
      grandTotal += product.price * product.quantity;
    }
    return grandTotal;
  }
  
 
  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.calculateGrandTotal();
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }

  clearCart() {
    this.cartProducts = [];
    this.grandTotal = 0;
    localStorage.setItem("cart", JSON.stringify(this.cartProducts));
  }
}
