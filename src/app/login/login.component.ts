import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === '' || this.password === '') {
      this.loginError = true;
      return;
    }

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (this.username === storedUsername && this.password === storedPassword) {
      this.loginError = false;
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
    }
  }
}
