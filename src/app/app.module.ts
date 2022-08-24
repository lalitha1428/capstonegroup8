import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindiscountComponent } from './admindiscount/admindiscount.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { RegisterComponent } from './register/register.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { SigninComponent } from './signin/signin.component';
import { UsersessionComponent } from './usersession/usersession.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindiscountComponent,
    AdminproductComponent,
    AdminusersComponent,
    AllproductsComponent,
    CartComponent,
    CategoriesComponent,
    DiscountsComponent,
    FileuploadComponent,
    HomeComponent,
    MyordersComponent,
    RegisterComponent,
    SalesReportComponent,
    SigninComponent,
    UsersessionComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
