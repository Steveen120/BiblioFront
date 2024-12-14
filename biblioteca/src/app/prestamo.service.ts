import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prestamo {
  id: number;
  libroId: number;
  personaId: number;
  fechaPrestamo: string; 
  fechaDevolucion: string; 
}

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private apiUrl = 'http://localhost:3000/prestamos'; // Cambia esta URL según tu backend

  constructor(private http: HttpClient) { }

  // Obtener todos los préstamos
  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  // Obtener un préstamo por su ID
  getPrestamoById(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`${this.apiUrl}/${id}`);
  }

  // Agregar un préstamo
  addPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  // Actualizar un préstamo
  updatePrestamo(id: number, prestamo: Partial<Prestamo>): Observable<Prestamo> {
    return this.http.put<Prestamo>(`${this.apiUrl}/${id}`, prestamo);
  }

  // Eliminar un préstamo
  deletePrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
