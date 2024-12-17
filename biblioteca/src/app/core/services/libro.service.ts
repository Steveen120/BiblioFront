import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  prestado: boolean;
  image: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private baseUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) {}

  listarLibrosDisponibles(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.baseUrl}/disponibles`);
  }

  listarLibrosPrestados(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.baseUrl}/prestados`);
  }

  prestarLibro(id: number): Observable<Libro> {
    return this.http.post<Libro>(`${this.baseUrl}/${id}/prestar`, {});
  }

  devolverLibro(id: number): Observable<Libro> {
    return this.http.post<Libro>(`${this.baseUrl}/${id}/devolver`, {});
  }
}
