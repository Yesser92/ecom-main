import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: UsersService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (response) => {
        this.users = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  deleteUser(id: number) {
    this.dataService.deleteUser(id).subscribe(
      () => {
        // User deleted successfully, refresh the users list
        this.dataService.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

}