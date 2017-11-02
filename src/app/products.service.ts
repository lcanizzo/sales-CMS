import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getAllProducts() {
    return this.http.get('/api/products')
      .map(res => res.json());
  }
}
