import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Product} from './product';

@Injectable()
export class ProductService {

  private ApiUrl = 'api';  // URL to web api

  constructor(private http: Http) { }  

  getProduct(id: number) {
    let url = `${this.ApiUrl}/product/${id}`;
    return this.http.get(url)
      .map(res => res.json())
  }

  getAllProducts() {
    return this.http.get(`${this.ApiUrl}/products`)
      .map(res => res.json());
  }

  updateProduct(product) {
    let url = `${this.ApiUrl}/update/${product.id}`;    
    return this.http.post(url, product)
    .subscribe(); 
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
