import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers: [ProductService]  
})
export class NewProductComponent implements OnInit {

   product= new Product;
   submitted = false;
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.product.thumb = " ";      
  }

  logProduct() {
    console.log(`This Product: \n ${JSON.stringify(this.product)} 
    \n Product Type: \n ${typeof(this.product)}`);        
  }

  onSubmit() { 
    this.submitted = true; 
    this.createProduct();
  }

  createProduct() {
    console.log('Component createProduct() hit');
    this.productService.createProduct(this.product);
    // this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
  