import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Product} from './product';

@Injectable()
export class ProductService {

  private ProductsUrl = 'api/product';  // URL to web api

  constructor(private http: Http) { }  

  getProduct(id: number) {
    const url = `${this.ProductsUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json())
  }

  getAllProducts() {
    return this.http.get('/api/products')
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
