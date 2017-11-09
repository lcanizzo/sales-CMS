// D E P E N D E N C I E S
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// S E R V I C E S 
import {ProductsService} from './products.service';
import {ProductService} from './product.service';
import {AdminSidebarService} from './admin-sidebar.service';
import {LoginService} from './login.service';
import { AdminService } from './admin.service';
// C O M P O N E N T S 
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginComponent } from './login/login.component';

// R O U T E S
const ROUTES = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'createProduct',
    component: NewProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminSidebarComponent,
    NavbarComponent,
    ProductDetailComponent,
    NewProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService, ProductsService, AdminSidebarService, ProductService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
