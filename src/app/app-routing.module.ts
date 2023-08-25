import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CafeitemsComponent } from './cafeitems/cafeitems.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { BangaloreFooditemsComponent } from './bangalore-fooditems/bangalore-fooditems.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { 
    path: '', redirectTo: '/welcome', pathMatch: 'full' 
  } ,
  { 
    path: 'login', component: LoginComponent 
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  { 
    path: 'register', component: RegisterComponent 
  },
  {
    path:'search/:searchTerm', component:CafeitemsComponent
  },
  { 
    path: 'home', component: HomeComponent
 },
 { 
  path: 'cafe/:location', component: CafeitemsComponent 
},
{
  path: 'food/:id', component: FoodItemsComponent
},
{
  path:'items/:id', component:BangaloreFooditemsComponent
},
{
  path:'cart', component:CartComponent
},
{
  path:'payment', component:PaymentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
