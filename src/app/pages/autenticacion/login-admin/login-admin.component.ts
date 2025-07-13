import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-login-admin',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './login-admin.component.html',
styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
usuario: string = '';
password: string = '';
error: string = '';

constructor(private router: Router) {}
    iniciarSesion() {
        if (this.usuario === 'admin' && this.password === 'admin') {
            this.error = '';
            this.router.navigate(['/DashBoardAdmin']); 
        } else {
        this.error = 'Usuario o contraseña incorrectos.';
        }
    }
}