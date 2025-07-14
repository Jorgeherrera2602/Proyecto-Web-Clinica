import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-DashBoardAdmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './DashBoardAdmin.component.html',
  styleUrls: ['./DashBoardAdmin.component.css'],
})
export class DashBoardAdminComponent {
  usuarios: any[] = [];
  usuarioSeleccionado: any = null;

  listaDoctores: { nombre: string; usuario: string; password: string; especialidad: string; mostrarHorarios?: boolean }[] = [];
  horariosDelDoctor: { [doctor: string]: { [dia: number]: { [hora: string]: boolean } } } = {};

  usuarioNuevoDoctor: string = '';
  passwordNuevoDoctor: string = '';
  nombreNuevoDoctor: string = '';
  especialidadNuevoDoctor: string = '';

  constructor() {
    this.cargarUsuarios();
    this.cargarDoctores();
    this.cargarHorarios();
  }

  cargarUsuarios() {
    const datos = localStorage.getItem('usuariosRegistrados');
    if (datos) {
      const usuariosGuardados = JSON.parse(datos);
      this.usuarios = usuariosGuardados.map((usuario: any) => ({
        ...usuario,
        citas: JSON.parse(localStorage.getItem(`citas_${usuario.email}`) || '[]')
      }));
    }
  }

  eliminarUsuario(index: number) {
    const usuario = this.usuarios[index];
    localStorage.removeItem(`citas_${usuario.email}`);
    this.usuarios.splice(index, 1);
    localStorage.setItem('usuariosRegistrados', JSON.stringify(this.usuarios));
  }

  verCitas(usuario: any) {
    if (this.usuarioSeleccionado?.email === usuario.email) {
      this.usuarioSeleccionado = null;
    } else {
      this.usuarioSeleccionado = usuario;
    }
  }

  eliminarCita(usuario: any, index: number) {
    usuario.citas.splice(index, 1);
    localStorage.setItem(`citas_${usuario.email}`, JSON.stringify(usuario.citas));
  }

  cargarDoctores() {
    const datos = localStorage.getItem('doctoresRegistrados');
    if (datos) {
      this.listaDoctores = JSON.parse(datos);
    } else {
      this.listaDoctores = [
        { usuario: 'felipe', password: '12345', nombre: 'Dr. Felipe Quispe', especialidad: 'Cardiología' },
        { usuario: 'ariano', password: '11111', nombre: 'Dr. Ariano Cuellar', especialidad: 'Dermatología' },
        { usuario: 'edson', password: '22222', nombre: 'Dr. Edson Sosa', especialidad: 'Nutrición' },
        { usuario: 'carlos', password: '33333', nombre: 'Dr. Carlos Mendoza', especialidad: 'Urología' },
        { usuario: 'diana', password: '44444', nombre: 'Dra. Diana López', especialidad: 'Psicología' },
        { usuario: 'elena', password: '55555', nombre: 'Dra. Elena Chávez', especialidad: 'Endocrinología' },
        { usuario: 'rolando', password: '66666', nombre: 'Dr. Rolando Soriano', especialidad: 'Hematología' },
        { usuario: 'jorge', password: '77777', nombre: 'Dr. Jorge Herrera', especialidad: 'Otorrinolaringología' },
        { usuario: 'aldo', password: '88888', nombre: 'Dr. Aldo Alanya', especialidad: 'Neumología' },
        { usuario: 'ana', password: '99999', nombre: 'Dra. Ana Torres', especialidad: 'Pediatría' },
        { usuario: 'beto', password: '54321', nombre: 'Dr. Beto Suárez', especialidad: 'Medicina Interna' }
      ];
      this.guardarDoctores();
    }
  }

  guardarDoctores() {
    localStorage.setItem('doctoresRegistrados', JSON.stringify(this.listaDoctores));
  }

  cargarHorarios() {
    const datos = localStorage.getItem('horariosDelDoctor');
    if (datos) {
      this.horariosDelDoctor = JSON.parse(datos);
    }
  }

  guardarHorarios() {
    localStorage.setItem('horariosDelDoctor', JSON.stringify(this.horariosDelDoctor));
  }

  toggleHorarios(doctor: any) {
    doctor.mostrarHorarios = !doctor.mostrarHorarios;
  }

  obtenerHorarioDelDoctor(nombreDoctor: string): { [dia: number]: { [hora: string]: boolean } } {
  const guardado = localStorage.getItem(`horarioDoctorJulio_${nombreDoctor}`);
  if (guardado) {
    return JSON.parse(guardado);
  }
  return {};
}

getDiasDoctor(nombreDoctor: string): number[] {
  const horarios = this.obtenerHorarioDelDoctor(nombreDoctor);
  return horarios ? Object.keys(horarios).map(d => +d) : [];
}

getHorasDelDia(nombreDoctor: string, dia: number): string[] {
  const horarios = this.obtenerHorarioDelDoctor(nombreDoctor);
  return horarios && horarios[dia]
    ? Object.keys(horarios[dia]).filter(hora => horarios[dia][hora])
    : [];
}

  agregarDoctor() {
    if (!this.usuarioNuevoDoctor || !this.passwordNuevoDoctor || !this.nombreNuevoDoctor || !this.especialidadNuevoDoctor) {
      alert('Completa todos los campos');
      return;
    }

    const existe = this.listaDoctores.find(d => d.usuario === this.usuarioNuevoDoctor);
    if (existe) {
      alert('El usuario ya existe');
      return;
    }

    this.listaDoctores.push({
      usuario: this.usuarioNuevoDoctor,
      password: this.passwordNuevoDoctor,
      nombre: this.nombreNuevoDoctor,
      especialidad: this.especialidadNuevoDoctor
    });

    this.guardarDoctores();

    this.usuarioNuevoDoctor = '';
    this.passwordNuevoDoctor = '';
    this.nombreNuevoDoctor = '';
    this.especialidadNuevoDoctor = '';
  }

  eliminarDoctor(nombre: string) {
    this.listaDoctores = this.listaDoctores.filter(d => d.nombre !== nombre);
    delete this.horariosDelDoctor[nombre];
    this.guardarDoctores();
    this.guardarHorarios();
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    window.location.href = '/login-admin';
  }
}

