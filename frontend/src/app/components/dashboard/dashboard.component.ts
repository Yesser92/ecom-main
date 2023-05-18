import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showMoreProducts = false;
  showMoreCategories = false;
  showMoreUsers = false;

  showUnshowProducts() {
    if(!this.showMoreProducts){
      this.showMoreProducts = true;
    }
    else{
      this.showMoreProducts = false;
    }
  }

  showUnshowCategories() {
    if(!this.showMoreCategories){
      this.showMoreCategories = true;
    }
    else{
      this.showMoreCategories = false;
    }
  }

  showUnshowUsers() {
    if(!this.showMoreUsers){
      this.showMoreUsers = true;
    }
    else{
      this.showMoreUsers = false;
    }
  }

}
