import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../authguards/auth.guard';
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

  constructor(private formBuilder: FormBuilder , private AuthService : AuthService , private router: Router, private authGuard: AuthGuard) {
    this.createFrom();

  }

  ngOnInit() {
    if(this.authGuard.redirectUrl) {
      this.message = 'You must login to access this page';
      this.MessageCalss = 'alert alert-danger';
    }else{
      this.message = '';
      this.MessageCalss = '';
    }
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
            if(this.authGuard.redirectUrl) {
              this.router.navigate([this.authGuard.redirectUrl]);
            }else{
             this.router.navigate(['/dashbaord']);
            }
          }, 2000);

        } else {
          this.message = data.message;
          this.MessageCalss = 'alert alert-danger';
        }
    });
  }

}
