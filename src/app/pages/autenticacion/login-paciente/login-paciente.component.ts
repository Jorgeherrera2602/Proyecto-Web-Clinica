import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-paciente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-paciente.component.html',
  styleUrl: './login-paciente.component.css'
})

export class LoginPacienteComponent {
  modoRegistro: boolean = false;
  usuariosRegistrados: { email: string; password: string }[] = [];
  constructor(private router: Router) {}

  email: string = '';
  password: string = '';

  cambiarModo() {
    this.modoRegistro = !this.modoRegistro;
    this.email = '';
    this.password = '';
  }

  registrar() {
    const existe = this.usuariosRegistrados.find(user => user.email === this.email);
    if (existe) {
      alert('Este correo ya está registrado.');
    } else {
      this.usuariosRegistrados.push({ email: this.email, password: this.password });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      this.cambiarModo();
    }
  }

  login() {
    const usuario = this.usuariosRegistrados.find(user => user.email === this.email && user.password === this.password);
    if (usuario) {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
    } else {
      alert('Correo o contraseña incorrectos');
    }
  }
}
