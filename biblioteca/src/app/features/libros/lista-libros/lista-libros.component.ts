import { Component, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-lista-libros',
  standalone: false,
  
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent implements OnInit {
  librosDisponibles: Libro[] = [];
  mensaje = '';

  constructor(private libroService: LibroService) {}

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
}