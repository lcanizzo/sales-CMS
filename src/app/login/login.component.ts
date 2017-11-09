import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new User;
  verified = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

}
