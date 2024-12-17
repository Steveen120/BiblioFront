import { Component, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-lista-libros-prestados',
  standalone: false,
  
  templateUrl: './lista-libros-prestados.component.html',
  styleUrl: './lista-libros-prestados.component.css'
})
export class ListaLibrosPrestadosComponent implements OnInit {
  librosPrestados: Libro[] = [];
  mensaje = '';

  constructor(private libroService: LibroService) {}

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
}