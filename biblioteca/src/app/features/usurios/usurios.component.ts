import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-usurios',
  standalone: false,
  templateUrl: './usurios.component.html',
  styleUrls: ['./usurios.component.css'],
})
export class UsuriosComponent implements OnInit {
  usuarios: any[] = [];
  isMenuVisible: boolean = false; // Propiedad para controlar la visibilidad del menú
  usuarioSeleccionado: any = null; // Usuario seleccionado para editar

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.log('Error al obtener', error);
      },
    });
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.usuarios = this.usuarios.filter((u) => u.id !== id);
      },
      error: (error) => {
        console.log('Error al eliminar', error);
      },
    });
  }

  seleccionarUsuario(usuario: any): void {
    this.usuarioSeleccionado = { ...usuario }; // Clona el usuario seleccionado
  }

  guardarUsuario(): void {
    if (this.usuarioSeleccionado) {
      this.userService.editUser(this.usuarioSeleccionado.id, this.usuarioSeleccionado).subscribe({
        next: () => {
          const index = this.usuarios.findIndex((u) => u.id === this.usuarioSeleccionado.id);
          if (index !== -1) {
            this.usuarios[index] = this.usuarioSeleccionado; // Actualiza en la lista
          }
          this.usuarioSeleccionado = null; // Cierra el modal
        },
        error: (error) => {
          console.log('Error al actualizar', error);
        },
      });
    }
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible; // Cambia el estado del menú
  }

  // Función para cerrar el menú al hacer clic fuera de él
  closeMenu(): void {
    this.isMenuVisible = false;
  }
}
