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
  
  
];

constructor(private router: Router) {}

iniciarSesion() {
  const doctor = this.usuariosDoctores.find(
    d => d.usuario === this.usuario && d.password === this.password
  );
  if (doctor) {
    localStorage.setItem('doctorActivo', doctor.nombre);
    this.router.navigate(['Portal-doctor']);
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

}
