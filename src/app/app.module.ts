import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LandingChildComponent } from './landing-child/landing-child.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    Navbar3Component,
    LandingComponent,
    HomeComponent,
    ProductComponent,
    LandingChildComponent,
    CartComponent,
    CartItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
