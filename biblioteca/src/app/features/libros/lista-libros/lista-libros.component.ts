import { Component, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../core/services/libro.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747

@Component({
  selector: 'app-lista-libros',
  standalone: false,
  
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent implements OnInit {
  librosDisponibles: Libro[] = [];
  mensaje = '';

<<<<<<< HEAD
  constructor(private libroService: LibroService, private router: Router) {}
=======
  constructor(private libroService: LibroService) {}
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747

  ngOnInit(): void {
    this.cargarLibrosDisponibles();
  }

  cargarLibrosDisponibles(): void {
    this.libroService.listarLibrosDisponibles().subscribe({
      next: (libros) => (this.librosDisponibles = libros),
      error: () => (this.mensaje = 'Error al cargar los libros disponibles'),
    });
  }

  prestarLibro(id: number): void {
    this.libroService.prestarLibro(id).subscribe({
      next: () => {
        this.cargarLibrosDisponibles();
        this.mensaje = 'Libro prestado con éxito';
      },
      error: () => (this.mensaje = 'Error al prestar el libro'),
    });
  }
<<<<<<< HEAD
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
=======
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
}