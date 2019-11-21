import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  message: string;
  MessageCalss: string;
  emailValid: boolean;
  emailMessage: string;


  constructor(private formBuilder: FormBuilder, private AuthService : AuthService) {
    this.createFrom();
  }

  createFrom() {
    this.formRegister = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agree: ['', Validators.required],
    });
  }

  onRegisterSubmit() {
    const user = {
      'username': this.formRegister.get('username').value,
      'email': this.formRegister.get('email').value,
      'password': this.formRegister.get('password').value,
    };
    this.AuthService.registerUser(user).subscribe(data => {
        if (data.success) {
            this.message = 'Account created succesfully';
            this.MessageCalss = 'alert alert-success';
            this.formRegister.reset();
        } else {
          this.message = 'There is an error in creating account please try agin';
          this.MessageCalss = 'alert alert-danger';
        }
    });
  }

  checkEmail() {
    this.AuthService.checkEmail(this.formRegister.get('email').value).subscribe(data => {
      if (data.success) {
            this.emailValid = true;
            this.emailMessage = data.message;
      } else {
        this.emailValid = false;
        this.emailMessage = data.message;
      }
  });
  }

  ngOnInit() {
  }

}
