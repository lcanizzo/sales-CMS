import { Component, OnInit } from '@angular/core';
import {Admin} from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= new Admin;
  verified = false;

  constructor (private adminService: AdminService) { }

  ngOnInit() {
  }

  onSubmit() { 
    this.checkAdmin();
  }

  checkAdmin() {
    this.adminService.checkAdmin(this.user);
  }

}
