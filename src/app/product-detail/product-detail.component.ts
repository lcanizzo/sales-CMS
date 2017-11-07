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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap)=>
      this.productService.getProduct(+params.get('id')))
        .subscribe((res) => {
          this.product = res;
          this.fixDate();
        })
  }

  fixDate() {
    let lastUpdate = this.product[0].lastUpdate;
    let prettyDate= lastUpdate.replace("T", " ");
    let prettyDateArray = prettyDate.split(' ');    
    let time = prettyDateArray[1].split(':');
    let hours = Number(time[0]);
    let minutes = Number(time[1]);
    let seconds = Number(time[2].split('.')[0]);
    let timeValue;
    if (hours > 0 && hours <= 12)
    {
      timeValue= "" + hours;
    } else if (hours > 12)
    {
      timeValue= "" + (hours - 12);
    }
    else if (hours == 0)
    {
      timeValue= "12";
    } 
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes; 
    timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  
    this.product[0].lastUpdate = `${prettyDateArray[0]} at: ${timeValue}`;
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
