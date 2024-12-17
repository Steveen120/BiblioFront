import { Component, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../core/services/libro.service';
<<<<<<< HEAD
<<<<<<< HEAD
import { Router } from '@angular/router';

=======
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
=======
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747

@Component({
  selector: 'app-lista-libros-prestados',
  standalone: false,
  
  templateUrl: './lista-libros-prestados.component.html',
  styleUrl: './lista-libros-prestados.component.css'
})
export class ListaLibrosPrestadosComponent implements OnInit {
  librosPrestados: Libro[] = [];
  mensaje = '';

<<<<<<< HEAD
<<<<<<< HEAD
  constructor(private libroService: LibroService, private router: Router) {}
=======
  constructor(private libroService: LibroService) {}
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
=======
  constructor(private libroService: LibroService) {}
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747

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
<<<<<<< HEAD
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
=======
>>>>>>> b8fbf5697c112c738972f857fda929dc1925b747
}