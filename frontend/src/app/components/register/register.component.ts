import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

 
  constructor(private formBuilder: FormBuilder) { 
    this.createFrom();
  }

  createFrom() {
    this.formRegister = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: '',
      agree: ''
    });
  }

  onRegisterSubmit(){
    console.log(this.formRegister);
  }


  ngOnInit() {
  }

}
