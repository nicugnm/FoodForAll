import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {
  RestaurantsAddonTagsComponent,
  TagType
} from './components/restaurants-addon-tags/restaurants-addon-tags.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RestaurantsHomepageComponent } from './components/restaurants-homepage/restaurants-homepage.component';
import { HomepageDetailsComponent } from './components/homepage-details/homepage-details.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    OrdersComponent,
    ResetPasswordComponent,
    ProfileComponent,
    CartComponent,
    HomepageComponent,
    RestaurantsAddonTagsComponent,
    RestaurantInfoComponent,
    RestaurantsHomepageComponent,
    HomepageDetailsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
