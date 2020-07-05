import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { Navbar3Component } from './navbar3/navbar3.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';





const routes: Routes = [
  {path:'',redirectTo: 'landing',pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'landing',component:LandingComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'navbar2',component:Navbar2Component},
  {path:'navbar3',component:Navbar3Component},
  {path:'cart',component:CartComponent},
  {path:'cartitem',component:CartItemComponent},
  {path:'filter',component:FilterComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
