import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class AdminSidebarService {

  constructor(private http: Http) { }

  routeTo(){
    console.log(`${this} clicked to route`);
  }
}
