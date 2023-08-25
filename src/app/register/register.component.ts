import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  newUsername: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  registrationSuccess: boolean = false;

  constructor(private router: Router) {}

  onRegister(): void {
    if (this.newUsername === '' || this.newPassword === '' || this.confirmPassword === '') {
      this.registrationSuccess = false;
      return;
    }

    if (this.newPassword === this.confirmPassword) {
      localStorage.setItem('username', this.newUsername);
      localStorage.setItem('password', this.newPassword);
      this.registrationSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // Redirect to login page after 2 seconds
    } else {
      this.registrationSuccess = false;
    }
  }
}