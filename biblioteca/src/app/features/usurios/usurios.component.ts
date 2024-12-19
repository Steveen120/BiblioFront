import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-usurios',
  standalone: false,
  templateUrl: './usurios.component.html',
  styleUrl: './usurios.component.css'
})
export class UsuriosComponent implements OnInit {
  usuarios: any[] = [];
  isMenuVisible: boolean = false; // Propiedad para controlar la visibilidad del menú

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.log('Error al obtener', error);
      }
    });
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((u) => u.id !== id);
      },
      error: (error) => {
        console.log('Error al eliminar', error);
      }
    });
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible; // Cambia el estado del menú
  }

  // Función para cerrar el menú al hacer clic fuera de él
  closeMenu(): void {
    this.isMenuVisible = false;
  }
}
