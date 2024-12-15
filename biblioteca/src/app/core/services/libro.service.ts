import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) {}

  // Crear un libro (solo admin)
  createBook(book: { title: string, author: string, description: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, book);
  }

  // Listar libros disponibles
  getAvailableBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/disponibles`);
  }

  // Listar libros prestados (solo admin)
  getLoanedBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prestados`);
  }

  // Editar un libro (solo admin)
  editBook(bookId: number, bookData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${bookId}`, bookData);
  }

  // Eliminar un libro (solo admin)
  deleteBook(bookId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${bookId}`);
  }

  // Prestar un libro
  borrowBook(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}/prestar`, {});
  }

  // Devolver un libro
  returnBook(bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${bookId}/devolver`, {});
  }
}
