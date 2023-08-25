import { Injectable } from '@angular/core';
import { Cart } from '../Share/models/Cart';
import { Foods } from '../Share/models/food';
import { CartItem } from '../Share/models/CartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
   private cart:Cart=new Cart();


  addToCart(food:Foods):void{
     let foundItem = this.cart.items.find(item => item.food.id ===food.id);
    if(foundItem){
      this.changeQuantity(food.id, foundItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodID:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodID); 
  }
  changeQuantity(foodID:number, quantity:number){
    let CartItem = this.cart.items.find(item => item.food.id === foodID);
    if(!CartItem)
    return;
  CartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
