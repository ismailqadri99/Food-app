import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoidaService } from '../services/noida.service';
import { Foods } from '../Share/models/food';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BangaloreService } from '../services/bangalore.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cafeitems',
  templateUrl: './cafeitems.component.html',
  styleUrls: ['./cafeitems.component.css']
})
export class CafeitemsComponent implements OnInit {
  noida: Foods[] = [];
  bangalore: Foods[]=[];
  location: string | null = null;


  constructor(private route: ActivatedRoute, private fs: NoidaService, private fs1: BangaloreService, private cartService:CartService ) {
    // console.warn("shopdata",shopdata.shops())
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if(params['searchTerm']) 
      this.noida = NoidaService.getNoida().filter((food: { name: string; }) => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.noida = NoidaService.getNoida();
    });
    this.location = this.route.snapshot.paramMap.get('location');
    // this.noida = this.fs.getNoida();
    this.noida = NoidaService.getNoida();
    // this.bangalore = this.fs1.getBangalore();
    this.bangalore=BangaloreService.getBangalore();
  }
  
}
