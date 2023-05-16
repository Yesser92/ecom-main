import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  emailPattern: string = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}';
  passwordPattern: string = '.{8,15}';
  url: string = 'http://localhost:3000/api/users/login';
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Email:', this.loginForm.value.email);
      console.log('Password:', this.loginForm.value.password);
      axios
        .post(this.url, {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .then((res) => {
          if (res.status === 200) { 
           alert(res.data.message);
           const user= res.data.user;
           user.role==='admin'?this.router.navigate(['/dashboard']):this.router.navigate(['/products'])
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            alert(error.response.data.message);
          } else {
            console.error(error);
            alert('An error occurred. Please try again later.');
          }
        });
    } else {
      return;
    }
  }
  
  
}
