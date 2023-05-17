import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [SlicePipe],
})
export class ProductItemComponent {
  showDetailsModal = false;
  slicePipe: SlicePipe = new SlicePipe();
  @Input()
  product!: Product;

  constructor() {}
}
