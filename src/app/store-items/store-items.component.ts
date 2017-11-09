import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.css'],
  providers: [ProductService]  
})
export class StoreItemsComponent implements OnInit {

  products: any = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap)=>
      this.productService.getAllByCat(+params.get('id')))
        .subscribe((res) => {
          this.products = res;
          console.log(`Products:\n ${JSON.stringify(this.products)}`);
        })
  }

}
