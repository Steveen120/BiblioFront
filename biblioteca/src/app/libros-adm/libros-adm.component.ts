import { Component, OnInit } from '@angular/core';
import { LibroService } from '../core/services/libro.service';

@Component({
  selector: 'app-libros-adm',
  standalone: false,
  templateUrl: './libros-adm.component.html',
  styleUrls: ['./libros-adm.component.css'],
})
export class LibrosAdmComponent implements OnInit {
  librosDisponibles: any[] = [];
  librosPrestados: any[] = [];
  nuevoLibro: any = {
    titulo: '',
    autor: '',
    image: '',
    descripcion: '',
    prestado: false,
  };
  libroSeleccionado: any = null;
  mensaje = '';

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.obtenerLibrosDisponibles();
    this.obtenerLibrosPrestados();
  }

  obtenerLibrosDisponibles(): void {
    this.libroService.listarLibrosDisponibles().subscribe((data) => {
      this.librosDisponibles = data;
    });
  }

  obtenerLibrosPrestados(): void {
    this.libroService.listarLibrosPrestados().subscribe((data) => {
      this.librosPrestados = data;
    });
  }

  agregarLibro(): void {
    this.libroService.agregarLibro(this.nuevoLibro).subscribe(() => {
      this.obtenerLibrosDisponibles();
      this.nuevoLibro = { titulo: '', autor: '', image: '', descripcion: '', prestado: false };
    });
  }

  editarLibro(): void {
    if (this.libroSeleccionado) {
      this.libroService
        .editarLibro(this.libroSeleccionado.id, this.libroSeleccionado)
        .subscribe(() => {
          this.obtenerLibrosDisponibles();
          this.libroSeleccionado = null;
        });
    }
  }

  eliminarLibro(id: number): void {
    this.libroService.eliminarLibro(id).subscribe(() => {
      this.obtenerLibrosDisponibles();
    });
  }

  prestarLibro(id: number): void {
    this.libroService.prestarLibro(id).subscribe(() => {
      this.obtenerLibrosDisponibles();
      this.obtenerLibrosPrestados();
    });
  }

  devolverLibro(id: number): void {
    this.libroService.devolverLibro(id).subscribe(() => {
      this.obtenerLibrosDisponibles();
      this.obtenerLibrosPrestados();
    });
  }

  seleccionarLibro(libro: any): void {
    this.libroSeleccionado = { ...libro }; // Clona el objeto seleccionado
  }
  isMenuVisible: boolean = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Función para cerrar el menú al hacer clic fuera de él
  closeMenu(): void {
    this.isMenuVisible = false;
  }
}


