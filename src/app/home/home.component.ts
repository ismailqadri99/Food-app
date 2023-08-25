import { Component, OnInit } from '@angular/core';
import { Foods } from '../Share/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NoidaService } from '../services/noida.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noida: Foods[] = [];
  bangalore: Foods[]=[];
  constructor(private fs: NoidaService, private router: Router) {
   }

  ngOnInit(): void {

  }
  selectCafe(cafe: string) {
    this.router.navigate(['/cafe', cafe]);
  }
  
}


