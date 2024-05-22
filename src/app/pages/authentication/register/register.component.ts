import { Component } from '@angular/core';
import { UserRoleService } from 'src/app/user-role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  userRole: string = '';

  constructor(private userRoleService: UserRoleService) {}

  setUserRole(role: string) {
    this.userRoleService.setUserRole(role);
    this.userRole = role;
  }

  resetUserRole() {
    this.userRoleService.setUserRole('');
    this.userRole = '';
  }
}
