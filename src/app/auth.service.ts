import { Injectable } from '@angular/core';

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
