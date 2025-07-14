import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Portaldoctor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Portaldoctor.Component.html',
  styleUrls: ['./Portaldoctor.Component.css']
})
export class PortaldoctorComponent {
  mostrarModal: boolean = false;
  diasSemana: string[] = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  diasJulio: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  espaciosInicio: undefined[] = Array(2);

  horariosMediaHora: string[] = [];
  diaSeleccionado: number | null = null;
  horarioSeleccionado: { [dia: number]: { [hora: string]: boolean } } = {};

  doctorActivo: string = '';
  especialidadDoctor: string = '';
  citasPorAtender: { paciente: string; dia: string; hora: string; especialidad: string }[] = [];

  constructor() {
    this.doctorActivo = localStorage.getItem('doctorActivo') || '';
    this.especialidadDoctor = this.obtenerEspecialidadDoctor(this.doctorActivo);
    this.generarHorariosMediaHora();
    this.cargarHorarioGuardado();
    this.cargarCitas();
  }

  obtenerEspecialidadDoctor(nombre: string): string {
    const especialidades = [
      { nombre: 'Cardiología', doctores: ['Dr. Felipe Quispe'] },
      { nombre: 'Pediatría', doctores: ['Dra. Ana Torres'] },
      { nombre: 'Medicina Interna', doctores: ['Dr. Beto Suárez'] },
      { nombre: 'Urología', doctores: ['Dr. Carlos Mendoza'] },
      { nombre: 'Psicología', doctores: ['Dra. Diana López'] },
      { nombre: 'Endocrinologia', doctores: ['Dra. Elena Chávez'] },
      { nombre: 'Hematología', doctores: ['Dr. Rolando Soriano'] },
      { nombre: 'Otorrinolaringología', doctores: ['Dr. Jorge Herrera'] },
      { nombre: 'Dermatología', doctores: ['Dr. Ariano Cuellar'] },
      { nombre: 'Neumología', doctores: ['Dr. Aldo Alanya'] },
      { nombre: 'Nutrición', doctores: ['Dr. Edson Sosa'] }
    ];
    return especialidades.find(e => e.doctores.includes(nombre))?.nombre || '';
  }

  generarHorariosMediaHora() {
    const inicio = 8 * 60;
    const fin = 17 * 60;
    for (let i = inicio; i < fin; i += 30) {
      const h1 = Math.floor(i / 60);
      const m1 = i % 60;
      const h2 = Math.floor((i + 30) / 60);
      const m2 = (i + 30) % 60;
      this.horariosMediaHora.push(
        `${this.formatoHora(h1)}:${this.formatoHora(m1)} - ${this.formatoHora(h2)}:${this.formatoHora(m2)}`
      );
    }
  }

  formatoHora(num: number): string {
    return num.toString().padStart(2, '0');
  }

  inicializarDia(dia: number) {
    this.horarioSeleccionado[dia] = {};
    this.horariosMediaHora.forEach(hora => {
      this.horarioSeleccionado[dia][hora] = false;
    });
  }

  cargarHorarioGuardado() {
    const guardado = localStorage.getItem(`horarioDoctorJulio_${this.doctorActivo}`);
    if (guardado) {
      this.horarioSeleccionado = JSON.parse(guardado);
    }
  }

  seleccionarDia(dia: number) {
    this.diaSeleccionado = dia;

    if (!this.horarioSeleccionado[dia]) {
      this.inicializarDia(dia);
    } else {
      const valores = Object.values(this.horarioSeleccionado[dia]);
      if (valores.length === 0) {
        this.inicializarDia(dia);
      }
    }
  }
    obtenerHorariosReservados(): { [dia: number]: string[] } {
  const datos = localStorage.getItem('usuariosRegistrados');
  const reservados: { [dia: number]: string[] } = {};
  if (datos) {
    const usuarios = JSON.parse(datos);
    for (const usuario of usuarios) {
      const citasUsuario = localStorage.getItem(`citas_${usuario.email}`);
      if (citasUsuario) {
        const citas = JSON.parse(citasUsuario);
        citas.forEach((c: any) => {
          if (c.doctor === this.doctorActivo && c.dia.startsWith('2025-07')) {
            const dia = parseInt(c.dia.split('-')[2]);
            if (!reservados[dia]) reservados[dia] = [];
            reservados[dia].push(c.horario);
          }
        });
      }
    }
  }
  return reservados;
}

  guardarHorarios() {
  const horariosReservados = this.obtenerHorariosReservados();

  for (const diaStr of Object.keys(this.horarioSeleccionado)) {
    const numDia = parseInt(diaStr);
    const horarios = this.horarioSeleccionado[numDia];
    const algunoMarcado = Object.values(horarios).some(v => v);
    if (!algunoMarcado) {
      delete this.horarioSeleccionado[numDia];
      continue;
    }
    if (horariosReservados[numDia]) {
      horariosReservados[numDia].forEach(horaReservada => {
        if (horarios[horaReservada] === false || horarios[horaReservada] === undefined) {
          horarios[horaReservada] = true;
        }
      });
    }
  }

  localStorage.setItem(`horarioDoctorJulio_${this.doctorActivo}`, JSON.stringify(this.horarioSeleccionado));
  this.mostrarModal = true;
  this.diaSeleccionado = null;
}
  esHorarioReservado(dia: number, hora: string): boolean {
  const reservados = this.obtenerHorariosReservados();
  return reservados[dia]?.includes(hora) || false;
}

  cerrarModal() {
    this.mostrarModal = false;
  }

  actualizarAlCambiarCheckbox(dia: number, hora: string) {
  if (this.horarioSeleccionado[dia]) {
const todosDesmarcados = Object.values(this.horarioSeleccionado[dia]).every(val => !val);

if (todosDesmarcados) {
  delete this.horarioSeleccionado[dia];
}

localStorage.setItem(`horarioDoctorJulio_${this.doctorActivo}`, JSON.stringify(this.horarioSeleccionado));
}
}

  tieneHorario(dia: number): boolean {
    return !!this.horarioSeleccionado[dia] &&
           Object.values(this.horarioSeleccionado[dia]).some(val => val === true);
  }

  cargarCitas() {
    const datos = localStorage.getItem('usuariosRegistrados');
    const doctor = this.doctorActivo;
    const citas: { paciente: string; dia: string; hora: string; especialidad: string }[] = [];

    if (datos) {
      const usuarios = JSON.parse(datos);
      for (const usuario of usuarios) {
        const citasUsuario = localStorage.getItem(`citas_${usuario.email}`);
        if (citasUsuario) {
          const citasJSON = JSON.parse(citasUsuario);
          citasJSON.forEach((c: any) => {
            if (c.doctor === doctor) {
              citas.push({
                paciente: usuario.nombre || usuario.email,
                dia: c.dia,
                hora: c.horario,
                especialidad: c.especialidad
              });
            }
          });
        }
      }
    }

    this.citasPorAtender = citas;
    this.ordenarCitas();
  }

  ordenarCitas() {
    this.citasPorAtender.sort((a, b) => {
      const fechaA = new Date(`${a.dia} ${a.hora.split(' - ')[0]}`);
      const fechaB = new Date(`${b.dia} ${b.hora.split(' - ')[0]}`);
      return fechaA.getTime() - fechaB.getTime();
    });
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    window.location.href = '/login-doctores';
  }
}

