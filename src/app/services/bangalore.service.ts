import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Share/models/food';

@Injectable({
  providedIn: 'root'
})
export class BangaloreService {

  constructor() { }

  static getByBId(id:number){
    return this.getBangalore().find(item => item.id == id);
  }

  static getBangalore(): Foods[]{
    return [
     {
    id:1,
    name: 'Uttapam',
    star:4.7,
    imageUrl:'/assets/utt.png',
    price: 49
  
     },
     {
    id:2,
    name: 'Idli Sambhar',
    star:3.9,
    imageUrl:'/assets/idli.png',
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
      name: 'Shawrma',
      star:3.8,
      imageUrl:'/assets/Shawrma.png',
      price: 49
     }
     ,
     {
      id:5,
    // price:number;
      name: 'Vada',
      star:4.7,
      imageUrl:'/assets/Vada.png',
      price: 49
       },
       {
      id:6,
      name: 'Dosa',
      star:3.9,
      imageUrl:'/assets/b-dosa.png',
      // tags: ['Lunch, Snacks'],
      price: 49
       },
       {
        id:7,
      name: "Dal Ubattu",
      star:4.3,
      imageUrl:'/assets/dal.png',
      // tags: ['Lunch, Dinner'],
      price: 49
       },
       {
        id:8,
    name: "Cold Drink",
    star:3.8,
    imageUrl:'/assets/cold drink.png',
    // tags: ['BreakFast, Lunch, Dinner'],
    price: 49
       }
    ]
  }

}
