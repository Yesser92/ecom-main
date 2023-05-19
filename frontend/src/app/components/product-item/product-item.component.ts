import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [SlicePipe],
})
export class ProductItemComponent {
  quantity: number = 0;
  cartProducts: any[] = [];
  showDetailsModal = false;
  showReviewForm = false;
  reviewTitle!: string; // Add this line to declare the property
  reviewContent!: string; // Add this line to declare the property

  public range(length: number): number[] {
    return new Array(length);
  }

  slicePipe: SlicePipe = new SlicePipe();
  @Input()
  product!: Product;
  @Output() item = new EventEmitter<any>();

  addButton: boolean = false;

  constructor() {
  
  }
 openReviewForm() {
    this.showReviewForm = true;
  }

  addToCart(event: any,newQuantity:string) {


    // get cart from  localstorage if exist 
    // if not exist create cart []
    // check if product_id exist in side the cart 
    // if exist quantity = qunatity + new quantity 
    // else push the product in cart 
    // stringfy cart in  localSorage 
    console.log(newQuantity)
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    else{
      this.cartProducts=[]
    }
   let exist=this.cartProducts.filter((e)=>e.product_id=== event.product_id)[0]
if (exist){exist.quantity=exist.quantity+Number(newQuantity)
  this.quantity=exist.quantity;
this.cartProducts=this.cartProducts.map((e)=> {
  if(e.product_id=== event.product_id){
    return exist
  }
  else{
    return e;
  }
})

}
else{
  event.quantity=Number(newQuantity);
  
  this.cartProducts.push(event)
}
localStorage.setItem('cart', JSON.stringify(this.cartProducts));


  
}

    
}




















//     console.log(event);
//     if ('cart' in localStorage) {
//       let exist = this.cartProducts.find((item) => item.product_id == event.product_id);
//       if (exist) {
//         console.log(event.quantity,"ahmedddddddddddddddddd")
//         event.quantity += 1;
//         this.cartProducts.push(event)
//         console.log(this.cartProducts ,"mehdiiiiiiiiiiiiiiiiiiiiiii")
//         localStorage.setItem('cart', JSON.stringify(this.cartProducts));
//       } else {
//         this.cartProducts.push(event);
//         console.log(this.cartProducts);

//       }}
// else {
//   event.quantity=1
//   this.cartProducts.push(event)
//   console.log(this.cartProducts ,"mehdiiiiiiiiiiiiiiiiiiiiiii")
//   localStorage.setItem('cart', JSON.stringify(this.cartProducts));
     
//       }

//       this.quantity=event.quantity;
      
 