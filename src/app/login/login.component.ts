import { Component, OnInit } from '@angular/core';
import {Admin} from '../admin';
import { AdminService } from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin= new Admin;
  verified = false;

  constructor (
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit() {
    this.verified = false;
  }

  onSubmit() { 
    this.checkAdmin();
  }

  checkAdmin() {
    this.adminService.checkAdmin(this.admin)
      .subscribe((res)=>{
        if (res[0].password == this.admin.password) {
          this.verified = true;
          this.router.navigate(['/products']);
        } else {
          this.loginError();
        }
      })
  };

  loginError() {
    console.log("Wrong Login");
  }

}
