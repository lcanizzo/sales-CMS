import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDetailService {

  constructor(private http: Http) { }

  getProduct() {
    return this.http.get('/api/product/:id')
      .map(res=> res.json)
  }

}
