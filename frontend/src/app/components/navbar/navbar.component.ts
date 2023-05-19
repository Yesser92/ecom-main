import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false; // Initially user is not logged in
  userName: string = ''; // Holds the user name if logged in

  constructor( private router: Router) {}

  logout() {
   
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/login']);
  }
}
