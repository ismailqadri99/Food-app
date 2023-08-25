import { Component } from '@angular/core';
import { Cart } from '../Share/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../Share/models/CartItem';
import { NoidaService } from '../services/noida.service';
import { BangaloreService } from '../services/bangalore.service';
import { Router } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!:Cart;
  constructor(private cartServcie:CartService, private router:Router){

    this.setCart();
  }

  setCart(){
    this.cart = this.cartServcie.getCart();
  }
  removeFromCart(CartItem:CartItem){
    this.cartServcie.removeFromCart(CartItem.food.id);
    this.setCart();
  }
  changeQuantity(CartItem:CartItem, quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartServcie.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
  }
  order(){
    this.router.navigateByUrl('/payment');
  }
}
