import { Component } from '@angular/core';
import { Foods } from '../Share/models/food';
import { ActivatedRoute,Router } from '@angular/router';
import { NoidaService } from '../services/noida.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent {
food!: Foods;

location: string | null = null;
  // noida: Foods[] = [];

constructor(private activatedRoute:ActivatedRoute, private fs:NoidaService, private cartService:CartService,private router:Router) {
  activatedRoute.params.subscribe((params) => {
    const food = NoidaService.getById(params['id']);
    if (food) {
      this.food = food;
    } 
  })
}

addToCartN(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart');
}
}
