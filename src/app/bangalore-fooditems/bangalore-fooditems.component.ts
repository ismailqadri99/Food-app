import { Component } from '@angular/core';
import { Foods } from '../Share/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { BangaloreService } from '../services/bangalore.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-bangalore-fooditems',
  templateUrl: './bangalore-fooditems.component.html',
  styleUrls: ['./bangalore-fooditems.component.css']
})
export class BangaloreFooditemsComponent {
  item!: Foods;
 
 
  constructor(private activatedRoute:ActivatedRoute, private foodService1: BangaloreService,private cartService:CartService,private router:Router){

  activatedRoute.params.subscribe((params) => {
    const items = BangaloreService.getByBId(params['id']);
    if (items) {
      this.item = items;
    }
  });
}
  addToCartB(){
    this.cartService.addToCart(this.item);
    this.router.navigateByUrl('/cart');
  }

}


