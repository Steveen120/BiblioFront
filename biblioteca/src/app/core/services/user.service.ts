import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuarios'; //conexion al backend

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios (solo admin)
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/todos`);
  }

  // Editar un usuario (solo admin)
  editUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, userData);
  }

  // Eliminar un usuario (solo admin)
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
