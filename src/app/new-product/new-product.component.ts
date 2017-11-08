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
export class NewProductComponent {

   @Input() product: Product;
  
    constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private location: Location,
    ) {}
  
    logProduct() {
      console.log(`This Product: \n ${JSON.stringify(this.product)} 
      \n Product Type: \n ${typeof(this.product)}`);        
    }
  
    createProduct() {
      this.productService.createProduct()
      this.goBack();
    }
  
    goBack(): void {
      this.location.back();
    }
  }
  