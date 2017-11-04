import { Component, OnInit } from '@angular/core';
import {AdminSidebarService} from '../admin-sidebar.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private adminSidebarService: AdminSidebarService) { }

  ngOnInit() {
  }

}
