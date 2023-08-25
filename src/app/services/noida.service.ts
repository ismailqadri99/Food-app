import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Share/models/food';

@Injectable({
  providedIn: 'root'
})
export class NoidaService {

  constructor() { }

  static getById(id:number){
    return this.getNoida().find(food => food.id == id);
  }

  static getNoida(): Foods[]{
    return [
     {
    id:1,
    name: 'Burger',
    star:4.7,
    imageUrl:'/assets/burger.png',
    price: 49,
    
     },
     {
    id:2,
    name: 'Masala Dosa',
    star:3.9,
    imageUrl:'/assets/dosa.png',
    price: 49
     },
     {
      id:3,
    name: "Veg-Thali",
    star:4.3,
    imageUrl:'/assets/thali.png',
    // tags: ['Lunch, Dinner'],
    price: 49
     },
     {
      id:4,
      name: 'Chole Bhature',
      star:3.8,
      imageUrl:'/assets/bhature.png',
      price: 49
     },{
      id:5,
    // price:number;
      name: 'Pizza',
      star:4.7,
      imageUrl:'/assets/pizza.png',
      price: 49
       },
       {
      id:6,
      name: 'Biryani',
      star:3.9,
      imageUrl:'/assets/biryani.png',
      // tags: ['Lunch, Snacks'],
      price: 49
       },
       {
        id:7,
      name: "Momos",
      star:4.3,
      imageUrl:'/assets/momos.png',
      // tags: ['Lunch, Dinner'],
      price: 49
       },
       {
        id:8,
    name: "Ice-cream",
    star:3.8,
    imageUrl:'/assets/ice-cream.png',
    // tags: ['BreakFast, Lunch, Dinner'],
    price: 49
       }
    ]
  }

 
}
