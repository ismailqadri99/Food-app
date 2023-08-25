import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  @Input() visible:boolean=false;
  @Input() notFoundMessage:string="Nothing Found!";
  @Input() resetLinkText:string="Reset";
  @Input() resetLinkRoute:string="/home";
  
  constructor(){}
}
