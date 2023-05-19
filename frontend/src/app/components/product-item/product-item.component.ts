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
  showReviewForm = false;
  reviewTitle!: string; // Add this line to declare the property
  reviewContent!: string; // Add this line to declare the property

  public range(length: number): number[] {
    return new Array(length);
  }

  slicePipe: SlicePipe = new SlicePipe();
  @Input()
  product!: Product;

  constructor() {}

  openReviewForm() {
    this.showReviewForm = true;
  }
}
