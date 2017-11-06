import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private productService: ProductService) { };

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) =>{
      this.products = products;
      console.log(`Products:\n ${products}`)
    });
  };

  selectedProduct: Product;
  
  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log(`Product Type: \n ${typeof(this.selectedProduct)}`);
  }
}
