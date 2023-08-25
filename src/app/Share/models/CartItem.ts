import { Foods } from "./food";

export class CartItem{
  static quantity: number;
  constructor(food:Foods){
    this.food=food;
  }
  food:Foods;
  quantity:number=1;
  // price:Foods;

  get price():number{
    return this.food.price * this.quantity;
  }
}