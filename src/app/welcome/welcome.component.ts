import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
    isMenuOpen: boolean = false;
  videoPlayed: boolean = false;
  selectedLocation: string = 'select location';

  constructor(private router: Router, private el: ElementRef) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth >= 800) {
      this.isMenuOpen = false;
    }
  }

  onLogout(): void {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }

  onLocationChange(): void {
    switch (this.selectedLocation) {
      case 'hyderabad':
        this.router.navigate(['/restaurants', 'hyderabad']);
        break;
      case 'chennai':
        this.router.navigate(['/restaurants', 'chennai']);
        break;
      case 'bangalore':
        this.router.navigate(['/restaurants', 'bangalore']);
        break;
      case 'noida':
        this.router.navigate(['/restaurants', 'noida']);
        break;
      default:
        break;
    }
  }

  // getItemCount(): number{
  //   return this.cartService.getItemCount();
  // }
}