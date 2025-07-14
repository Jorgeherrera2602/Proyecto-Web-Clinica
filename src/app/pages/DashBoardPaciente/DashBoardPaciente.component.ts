import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-DashBoardPaciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './DashBoardPaciente.component.html',
  styleUrls: ['./DashBoardPaciente.component.css']
})
export class DashBoardPacienteComponent implements OnInit {
  
  espaciosInicioJulio: undefined[] = [];
  horariosDelDia: string[] = [];

  especialidades = [
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

  doctores: string[] = [];
  especialidadSeleccionada = '';
  doctorSeleccionado = '';
  diasDisponibles: string[] = [];
  diaSeleccionado = '';
  horarios: string[] = [];
  horariosReservados: string[] = [];
  horarioSeleccionado = '';
  mostrarModal = false;
  mensajeError = '';

  citas: { dia: string; horario: string; doctor: string; especialidad: string }[] = [];

  diasDelMes: string[] = [];
  nombreMes = 'Julio';

  emailPaciente: string = '';
  ngOnInit(): void {
  const email = localStorage.getItem('usuarioActivo');
  if (email) {
    this.emailPaciente = email;
    console.log('Email activo:', this.emailPaciente);
    const citasGuardadas = localStorage.getItem(`citas_${email}`);
    if (citasGuardadas) {
      this.citas = JSON.parse(citasGuardadas);
    }
    const daysInMonth = 31;
    this.diasDelMes = Array.from({ length: daysInMonth }, (_, i) => {
      const day = (i + 1).toString().padStart(2, '0');
      return `2025-07-${day}`;
    });
  }
}

  guardarCitasEnLocalStorage() {
  localStorage.setItem(`citas_${this.emailPaciente}`, JSON.stringify(this.citas));
}


  seleccionarEspecialidad(nombre: string) {
    this.especialidadSeleccionada = nombre;
    this.doctores = this.especialidades.find(e => e.nombre === nombre)?.doctores || [];
    this.doctorSeleccionado = '';
    this.diasDisponibles = [];
    this.diaSeleccionado = '';
    this.horariosReservados = [];
  }

  seleccionarDoctor(nombre: string) {
    this.doctorSeleccionado = nombre;

    const data = localStorage.getItem(`horarioDoctorJulio_${nombre}`);
  if (data) {
    const disponibilidad = JSON.parse(data);
    this.diasDisponibles = Object.keys(disponibilidad).filter(dia => {
      return Object.values(disponibilidad[dia]).some(h => h);
    }).map(d => `2025-07-${d.toString().padStart(2, '0')}`);

    this.horarios = Array.from(
      new Set(
        this.diasDisponibles.flatMap(dia => {
          const diaNum = Number(dia.split('-')[2]);
          const horariosDia = disponibilidad[diaNum];
          return Object.keys(horariosDia).filter(h => horariosDia[h]);
        })
      )
    );
  } else {
    this.diasDisponibles = [];
    this.horarios = [];
  }
    this.diaSeleccionado = '';
    this.horariosReservados = [];
    
    if (this.diaSeleccionado) {
    this.horariosReservados = this.citas
      .filter(c => c.dia === this.diaSeleccionado && c.doctor === nombre)
      .map(c => c.horario);
  }
  this.actualizarHorariosReservados();
  }

  actualizarHorariosReservados() {
  if (this.diaSeleccionado && this.doctorSeleccionado) {
    const todasLasCitas = this.obtenerTodasLasCitas();
    this.horariosReservados = todasLasCitas
      .filter(c => c.dia === this.diaSeleccionado && c.doctor === this.doctorSeleccionado)
      .map(c => c.horario);
  } else {
    this.horariosReservados = [];
  }
}


  seleccionarDia(dia: string) {
  this.diaSeleccionado = dia;
    const diaNum = Number(dia.split('-')[2]);
    const data = localStorage.getItem(`horarioDoctorJulio_${this.doctorSeleccionado}`);
    if (data) {
      const disponibilidad = JSON.parse(data);
      const horariosDia = disponibilidad[diaNum];
      this.horariosDelDia = Object.keys(horariosDia).filter(h => horariosDia[h]);
    } else {
      this.horariosDelDia = [];
    }
    this.horariosReservados = this.citas
      .filter(c => c.dia === dia && c.doctor === this.doctorSeleccionado)
      .map(c => c.horario);
    setTimeout(() => {
      const horarioEl = document.getElementById('horarios');
      horarioEl?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    this.actualizarHorariosReservados();
}



  advertenciaActiva = false;
  mensajeAdvertencia = '';

  seleccionarHorario(horario: string) {
    if (this.horariosReservados.includes(horario)) {
      this.mensajeAdvertencia = 'Este horario ya está ocupado.';
      this.advertenciaActiva = true;
      return;
    }
      this.horarioSeleccionado = horario;
      this.mostrarModal = true;
  }
  cerrarAdvertencia() {
    this.advertenciaActiva = false;
    this.mensajeAdvertencia = '';
  }

  confirmarReserva() {
  const yaTieneCitaEseDia = this.citas.some(c => c.dia === this.diaSeleccionado);

  if (yaTieneCitaEseDia) {
    this.mensajeAdvertencia = 'Ya tienes una cita registrada en este día.';
    this.advertenciaActiva = true;
    this.mostrarModal = false;
    return;
  }
  if (!this.horariosReservados.includes(this.horarioSeleccionado)) {
    this.horariosReservados.push(this.horarioSeleccionado);
    this.citas.push({
      dia: this.diaSeleccionado,
      horario: this.horarioSeleccionado,
      doctor: this.doctorSeleccionado,
      especialidad: this.especialidadSeleccionada
    });
    this.guardarCitasEnLocalStorage();
  }

  this.mostrarModal = false;
}


  cancelarReserva() {
    this.horarioSeleccionado = '';
    this.mostrarModal = false;
  }

  eliminarCita(index: number) {
    const cita = this.citas[index];
    this.citas.splice(index, 1);
    this.guardarCitasEnLocalStorage();
    if (cita.dia === this.diaSeleccionado && cita.doctor === this.doctorSeleccionado) {
      this.actualizarHorariosReservados();
    }
  }
  get citasOrdenadas() {
  return this.citas.slice().sort((a, b) => {
    const fechaA = new Date(`${a.dia} ${a.horario.split(' - ')[0]}`);
    const fechaB = new Date(`${b.dia} ${b.horario.split(' - ')[0]}`);
    return fechaA.getTime() - fechaB.getTime();
  });
}
  cerrarSesion() {
    localStorage.removeItem('usuarioActivo');
    window.location.href = '/login-paciente';
  }
  obtenerTodasLasCitas(): { dia: string; horario: string; doctor: string; especialidad: string }[] {
  const datos = localStorage.getItem('usuariosRegistrados');
  const todas: { dia: string; horario: string; doctor: string; especialidad: string }[] = [];

  if (datos) {
    const usuarios = JSON.parse(datos);
    for (const usuario of usuarios) {
      const citasUsuario = localStorage.getItem(`citas_${usuario.email}`);
      if (citasUsuario) {
        const citas = JSON.parse(citasUsuario);
        todas.push(...citas);
      }
    }
  }
  return todas;
}
}
