import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formLogin: FormGroup;
  message: string;
  MessageCalss: string;
  emailValid: boolean;
  emailMessage: string;

  constructor(private formBuilder: FormBuilder , private AuthService : AuthService , private router: Router) {
    this.createFrom();

  }

  ngOnInit() {
  }

  createFrom() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required],
    });
  }


  onLoginSubmit() {
    const user = {
      'email': this.formLogin.get('email').value,
      'password': this.formLogin.get('password').value,
    };

    this.AuthService.login(user).subscribe(data => {
        if (data.success) {
            this.message = data.message;
            this.MessageCalss = 'alert alert-success';
            this.AuthService.saveUserData(data.token, data.user);

          setTimeout(() => {
          this.router.navigate(['/dashbaord']);
          }, 2000);

        } else {
          this.message = data.message;
          this.MessageCalss = 'alert alert-danger';
        }
    });
  }

}
