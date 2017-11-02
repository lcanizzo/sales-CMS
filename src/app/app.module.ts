// D E P E N D E N C I E S
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
// C O M P O N E N T S 
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
// S E R V I C E S 
import {ProductsService} from './products.service';

// R O U T E S
const ROUTES = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
