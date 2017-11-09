import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dateNow;

  constructor() { }

  ngOnInit() {
    let currentDate = Date();
    console.log("\n"+currentDate);
    let arrayDate = currentDate.split(" ");
    console.log("\n"+arrayDate);
    let today = "";
    for (let i=0; i<4; i++){
      today += `${arrayDate[i]} `;
      this.dateNow = today;
    }
    console.log("\n"+today);    
  }

}
