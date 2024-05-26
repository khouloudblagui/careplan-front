import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserRoleService } from 'src/app/user-role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  userRole: string = '';// Assurez-vous que userRole est déclaré comme variable de classe
  username: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private userRoleService: UserRoleService,
    private router: Router
  ) {}

  setUserRole(role: string) {
    this.userRoleService.setUserRole(role);
    this.userRole = role; // Mettez à jour la variable userRole avec le rôle sélectionné
  }

  resetUserRole() {
    this.userRoleService.setUserRole('');
    this.userRole = ''; // Réinitialiser la variable userRole
  }

  login() {
    // Votre logique de connexion ici
  }
}



/*import { Component } from '@angular/core';
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

    // Redirect to the corresponding page based on the selected role
    if (this.userRole === 'admin') {
      this.router.navigate(['/admin']);
    } else if (this.userRole === 'patient') {
      this.router.navigate(['/patient']);
    } else if (this.userRole === 'doctor') {
      this.router.navigate(['/doctor']);
    }
  }
}*/
