import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  categories: any = [];
  showAddCategory = false;
  category_name: string = "";
  description: string = "";

  constructor(private dataService: CategoriesService) { }

  ngOnInit() {
    this.dataService.getCategories().subscribe(
      (response) => {
        this.categories = response.categories;
        console.log(response.categories);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  deleteCategory(id: number) {
    this.dataService.deleteCategory(id).subscribe(
      () => {
        // Category deleted successfully, refresh the categories list
        this.dataService.getCategories();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }

  showUnshowAdd() {
    if (!this.showAddCategory) {
      this.showAddCategory = true;
    }
    else {
      this.showAddCategory = false;
    }
  }

}
