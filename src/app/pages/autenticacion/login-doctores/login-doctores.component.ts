import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-doctores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-doctores.component.html',
  styleUrl: './login-doctores.component.css'
})
export class LoginDoctoresComponent {
  usuario: string = '';
  password: string = '';

  usuariosDoctores = [
    { usuario: 'felipe', password: '12345', nombre: 'Dr. Felipe Quispe' },
    { usuario: 'ariano', password: '11111', nombre: 'Dr. Ariano Cuellar' },
    { usuario: 'edson', password: '22222', nombre: 'Dr. Edson Sosa' },
    { usuario: 'carlos', password: '33333', nombre: 'Dr. Carlos Mendoza' },
    { usuario: 'diana', password: '44444', nombre: 'Dra. Diana López' },
    { usuario: 'elena', password: '55555', nombre: 'Dra. Elena Chávez' },
    { usuario: 'rolando', password: '66666', nombre: 'Dr. Rolando Soriano' },
    { usuario: 'jorge', password: '77777', nombre: 'Dr. Jorge Herrera' },
    { usuario: 'aldo', password: '88888', nombre: 'Dr. Aldo Alanya' },
    { usuario: 'ana', password: '99999', nombre: 'Dra. Ana Torres' },
    { usuario: 'beto', password: '54321', nombre: 'Dr. Beto Suárez' }
  ];

  constructor(private router: Router) {}

  iniciarSesion() {
    // 1. Buscar en lista predefinida
    const doctorPredefinido = this.usuariosDoctores.find(
      d => d.usuario === this.usuario && d.password === this.password
    );

    if (doctorPredefinido) {
      localStorage.setItem('doctorActivo', doctorPredefinido.nombre);
      this.router.navigate(['Portal-doctor']);
      return;
    }

    // 2. Buscar en doctores registrados vía admin
    const doctoresRegistrados = JSON.parse(localStorage.getItem('doctoresRegistrados') || '[]');

    const doctorRegistrado = doctoresRegistrados.find(
      (doc: any) => doc.usuario === this.usuario && doc.password === this.password
    );

    if (doctorRegistrado) {
      localStorage.setItem('doctorActivo', doctorRegistrado.nombre);
      this.router.navigate(['Portal-doctor']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
