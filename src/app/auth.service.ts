// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081//api/v1/auth/registerAdminng '; // Remplacez cela par l'URL de votre backend

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    // Vérifie si un token JWT existe dans le stockage local
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Retourne true si authToken n'est pas null ou undefined
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/register`, { name, email, password });
  }

  logout() {
    // Supprimer le token JWT du stockage local
    localStorage.removeItem('authToken');
  }
}





/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/api/auth'; // Remplacez cela par l'URL de votre backend

  constructor(private http: HttpClient) { }
  isAuthenticated(): boolean {
    // Vérifie si un token JWT existe dans le stockage local
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Retourne true si authToken n'est pas null ou undefined
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  logout() {
    // Supprimer le token JWT du stockage local
    localStorage.removeItem('authToken');
  }
}






/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated(): boolean {
    // Implement your authentication check logic here
    // For example, check if a token exists in local storage
    return !!localStorage.getItem('authToken');
  }

  login(token: string): void {
    // Save the authentication token to local storage
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    // Remove the authentication token from local storage
    localStorage.removeItem('authToken');
  }
}
*/
