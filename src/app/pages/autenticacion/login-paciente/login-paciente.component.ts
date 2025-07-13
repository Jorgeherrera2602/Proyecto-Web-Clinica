import { Component, OnInit } from '@angular/core';
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

export class LoginPacienteComponent implements OnInit {
  ngOnInit() {
  const datos = localStorage.getItem('usuariosRegistrados');
  if (datos) {
    this.usuariosRegistrados = JSON.parse(datos);
    }
  } 
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
    const nuevoUsuario = {
      email: this.email,
      password: this.password
    };
    this.usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuariosRegistrados));
    localStorage.setItem(`citas_${this.email}`, JSON.stringify([]));
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.cambiarModo();
  }
}
 login() {
  const usuario = this.usuariosRegistrados.find(user => user.email === this.email && user.password === this.password);
  if (usuario) {
    localStorage.setItem('usuarioActivo', this.email);
    alert('Inicio de sesión exitoso');
    this.router.navigate(['/DashBoardPaciente']);
  } else {
    alert('Correo o contraseña incorrectos');
  }
}

}
