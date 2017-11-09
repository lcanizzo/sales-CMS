import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Admin} from './admin';

@Injectable()
export class AdminService {

  private ApiUrl = 'api';    

  constructor(private http: Http) { }

  checkAdmin(admin){
    const url = `${this.ApiUrl}/admin`;
    return this.http.post(url, admin)
    .map(res => res.json())
  }
}
