import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe({
<<<<<<< HEAD
<<<<<<< HEAD
      next: () => this.router.navigate(['/home']),
=======
      next: () => this.router.navigate(['/libros-disponibles']),
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
=======
      next: () => this.router.navigate(['/libros-disponibles']),
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
      error: (err) => alert('Error al iniciar sesión: ' + err.error.message),
    });
  }
}