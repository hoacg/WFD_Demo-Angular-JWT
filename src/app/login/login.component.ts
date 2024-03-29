import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isShow = false;
  isSuccess = false;

  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  login() {
    const { username, password } = this.userForm.value;
    this.authService.signin(username, password).subscribe( result => {
      localStorage.setItem('ACCESS_TOKEN', result.token);
      this.isShow = true;
      this.isSuccess = true;
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
    });
  }


}
