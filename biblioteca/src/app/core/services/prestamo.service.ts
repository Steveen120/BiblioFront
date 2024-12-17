import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private apiUrl = 'http://localhost:8080/api/prestamos';

  constructor(private http: HttpClient) {}

  // Listar los préstamos de un usuario (solo admin)
  getLoansByUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${userId}`);
  }

  // Listar el historial de préstamos de un libro (solo admin)
  getBookLoanHistory(bookId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/libro/${bookId}`);
  }
}
