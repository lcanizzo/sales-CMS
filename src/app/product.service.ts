import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Product} from './product';

@Injectable()
export class ProductService {

  private ApiUrl = 'api';  

  constructor(private http: Http) { }  

  getProduct(id: number) {
    const url = `${this.ApiUrl}/product/${id}`;
    return this.http.get(url)
      .map(res => res.json())
  }

  getAllProducts() {
    return this.http.get(`${this.ApiUrl}/products`)
      .map(res => res.json());
  }

  getAllByCat(id: number) {
    const url = `${this.ApiUrl}/items/${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  updateProduct(product) {
    const url = `${this.ApiUrl}/update/${product.id}`;    
    return this.http.post(url, product)
    .subscribe(); 
  }

  createProduct(product) {
    console.log('Product Service createProduct() method hit');
    const url = `${this.ApiUrl}/createProduct`;
    return this.http.post(url, product)
    .subscribe();
  }

  deleteProduct(product) {
    console.log('Product Service deleteProduct() hit');
    const url = `${this.ApiUrl}/deleteProduct`;
    return this.http.post(url, product)
    .subscribe((res)=>{
      console.log(`delete product service Response:\n ${JSON.stringify(res)}`);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
