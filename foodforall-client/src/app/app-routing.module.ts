import { NgModule } from '@angular/core';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {RouterModule, Routes} from "@angular/router";
import {OrdersComponent} from "./components/orders/orders.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ResetPasswordComponent} from "./components/reset-password/reset-password.component";
import {CartComponent} from "./components/cart/cart.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {RestaurantInfoComponent} from "./components/restaurant-info/restaurant-info.component";
import {ShelterInfoComponent} from "./components/shelter-info/shelter-info.component";



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant/:id', component: RestaurantInfoComponent },
  { path: 'shelter/:id', component: ShelterInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
