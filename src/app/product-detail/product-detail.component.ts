import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {ProductDetailService} from '../product-detail.service';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit 
{
  @Input() product: Product;
// product: any = [];
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap)=>
      this.productService.getProduct(+params.get('id')))
        .subscribe(res => this.product = res);
  }

  logProduct() {
    console.log(`This Product: \n ${JSON.stringify(this.product[0])}`);        
  }

  updateProduct() {
    this.productService.updateProduct(this.product[0])
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
