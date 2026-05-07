import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], 
  templateUrl: './login.html'
})
export class Login {

  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}