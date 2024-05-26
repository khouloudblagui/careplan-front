import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    // Appeler le service d'authentification pour envoyer les données d'inscription au backend
    this.authService.register(this.name, this.email, this.password)
      .subscribe(
        () => {
          // Rediriger l'utilisateur vers la page de connexion après une inscription réussie
          this.router.navigate(['/authentication/login']);
        },
        (error) => {
          // Gérer les erreurs d'inscription ici
          console.error('Registration error:', error);
          // Afficher un message d'erreur à l'utilisateur, par exemple
          alert('Registration failed. Please try again later.');
        }
      );
  }
}






/*import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/user-role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  userRole: string = '';
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userRoleService: UserRoleService) {}

  setUserRole(role: string) {
    this.userRoleService.setUserRole(role);
    this.userRole = role;
  }

  resetUserRole() {
    this.userRoleService.setUserRole('');
    this.userRole = '';
  }

  register() {
    // Implémentez ici votre logique d'enregistrement de l'utilisateur
    console.log('Registration data:', this.name, this.email, this.password);
    // Vous pouvez appeler un service pour envoyer les données à votre backend
  }
}*/
