import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class Register {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.user);
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}