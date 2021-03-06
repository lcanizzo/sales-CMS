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

export class ProductDetailComponent implements OnInit {
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
    if (hours > 0 && hours <= 12) {
      //GMT is 5 hours ahead of Eastern
      if (hours - 5 == 0) {
        timeValue= "12";
      } else {
        timeValue= "" + (hours - 5);        
      }
    } else if (hours > 12) {
      if (hours - 12 - 5 == 0) {
        timeValue= "12";
      } else {
        timeValue= "" + (hours - 12 - 5);        
      }
    } else {
      timeValue= "" + (12 - 5);
    };

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes; 
    timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  
    console.log(`Time Value:\n ${timeValue}`);
    this.product[0].lastUpdate = `${prettyDateArray[0]} at: ${timeValue}`;
  }

  logProduct() {
    console.log(`This Product: \n ${JSON.stringify(this.product[0])}`);        
  }

  updateProduct() {
    this.productService.updateProduct(this.product[0])
    this.goBack();
  }

  deleteProduct() {
    let check = confirm("Confirm Deletion");
    if (check == true) {
      this.productService.deleteProduct(this.product[0])
      this.goBack();
    } else {
      console.log("Deletion Canceled");
    }
  }

  goBack(): void {
    this.location.back();
  }
}
