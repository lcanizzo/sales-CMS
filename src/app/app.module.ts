// D E P E N D E N C I E S
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// S E R V I C E S 
import {ProductsService} from './products.service';
import { AdminSidebarService } from './admin-sidebar.service';
// C O M P O N E N T S 
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminSidebarComponent,
    NavbarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProductsService, AdminSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
