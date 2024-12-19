// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuVisible: boolean = false; /// Estado del menú

  constructor(private router: Router) {}

  // Función para redirigir al mismo home
  goHome(): void {
    this.router.navigate(['/home']); // Redirige a la página principal
  }

  // Función para abrir/cerrar el menú
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Función para cerrar el menú al hacer clic fuera de él
  closeMenu(): void {
    this.isMenuVisible = false;
  }
}
