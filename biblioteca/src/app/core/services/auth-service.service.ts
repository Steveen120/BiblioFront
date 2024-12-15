import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/usuarios';
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    // Comprobación para asegurarse de que se esté en el cliente (navegador)
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    this.tokenSubject = new BehaviorSubject<string | null>(token);
  }

  login(email: string, password: string): Observable<void> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map((response) => {
          // Solo interactuar con localStorage en el navegador
          if (typeof window !== 'undefined') {
            localStorage.setItem('token', response.token);
          }
          this.tokenSubject.next(response.token);
        })
      );
  }

  getToken(): string | null {
    // Solo acceder a localStorage en el navegador
    return typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  }

  logout(): void {
    // Solo manipular localStorage en el navegador
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
    this.tokenSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
