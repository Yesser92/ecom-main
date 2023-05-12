import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  showAddProduct = false

  showUnshowAdd() {
    if(!this.showAddProduct){
      this.showAddProduct = true
    }
    else{
      this.showAddProduct = false
    }
  }
}
