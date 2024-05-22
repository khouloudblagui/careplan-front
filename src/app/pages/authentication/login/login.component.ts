import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserRoleService } from 'src/app/user-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  userRole: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private userRoleService: UserRoleService,
    private router: Router
  ) {}

  setUserRole(role: string) {
    this.userRoleService.setUserRole(role);
    this.userRole = role;
    this.router.navigate([`/${role}`]); // Redirection vers la page correspondante
  }

  resetUserRole() {
    this.userRoleService.setUserRole('');
    this.userRole = '';
  }

  login() {
    // Implement your login logic here
    // For demonstration, let's assume a successful login returns a token
    const token = 'dummyAuthToken'; // Replace this with a real token from your backend

    // Save the token using AuthService
    this.authService.login(token);

    // Redirect to the dashboard
    this.router.navigate(['/dashboard']);
  }
}
