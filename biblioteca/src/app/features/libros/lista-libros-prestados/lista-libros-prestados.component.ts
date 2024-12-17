import { Component, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../core/services/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-libros-prestados',
  standalone: false,
  
  templateUrl: './lista-libros-prestados.component.html',
  styleUrl: './lista-libros-prestados.component.css'
})
export class ListaLibrosPrestadosComponent implements OnInit {
  librosPrestados: Libro[] = [];
  mensaje = '';

  constructor(private libroService: LibroService, private router: Router) {}

  ngOnInit(): void {
    this.cargarLibrosPrestados();
  }

  cargarLibrosPrestados(): void {
    this.libroService.listarLibrosPrestados().subscribe({
      next: (libros) => {
        this.librosPrestados = libros;
      },
      error: () => {
        this.mensaje = 'Error al cargar los libros prestados';
      }
    });
  }

  devolverLibro(id: number): void {
    this.libroService.devolverLibro(id).subscribe({
      next: () => {
        this.cargarLibrosPrestados();
        this.mensaje = 'Libro devuelto con éxito';
      },
      error: (err) => {
        this.mensaje = err.error.message || 'Solo el usuario que prestó el libro puede devolverlo';
      }
    });
  }

  ///
  isMenuVisible: boolean = false; // Estado del menú
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