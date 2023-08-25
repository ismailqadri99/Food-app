import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { CafeitemsComponent } from './cafeitems/cafeitems.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { BangaloreFooditemsComponent } from './bangalore-fooditems/bangalore-fooditems.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeheaderComponent,
    CafeitemsComponent,
    FoodItemsComponent,
    BangaloreFooditemsComponent,
    CheckoutComponent,
    PaymentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
