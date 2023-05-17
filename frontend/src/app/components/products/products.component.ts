import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products:[] = [];
  @Input() data: any;
  @Output() item = new EventEmitter<any>();
  amount: number = 1; // Ajoutez cette ligne

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(data);
    });
  }

  addToCart(product: Product) {
    const item = {
      product,
      quantity: this.amount
    };

    if ("cart" in localStorage) {
      this.products = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.products.find((p: any) => p.product.product_id == product.product_id);

      if (exist) {
        alert("Product is already in your cart");
      } else {
        this.products.push();
        localStorage.setItem("cart", JSON.stringify(this.products));
      }
    } else {
      this.products.push();
      localStorage.setItem("cart", JSON.stringify(this.products));
    }

    this.item.emit(item);
  }
}
