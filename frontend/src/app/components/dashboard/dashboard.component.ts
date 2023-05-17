import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  showMoreProducts = false

  showUnshow() {
    if(!this.showMoreProducts){
      this.showMoreProducts = true
    }
    else{
      this.showMoreProducts = false
    }
  }

}
