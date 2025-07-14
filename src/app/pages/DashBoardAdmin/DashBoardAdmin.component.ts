import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './DashBoardAdmin.component.html',
  styleUrls: ['./DashBoardAdmin.component.css']
})
export class DashBoardAdminComponent implements OnInit {
  usuarios: { email: string }[] = [];
  usuarioSeleccionado: string | null = null;
  citasSeleccionadas: { dia: string; horario: string; doctor: string; especialidad: string }[] = [];

  ngOnInit() {
    const datos = localStorage.getItem('usuariosRegistrados');
    if (datos) {
      const lista = JSON.parse(datos);
      this.usuarios = lista.map((u: any) => ({ email: u.email }));
    }
  }

  seleccionarUsuario(email: string) {
    if (this.usuarioSeleccionado === email) {
      // cerrar si ya está abierto
      this.usuarioSeleccionado = null;
      this.citasSeleccionadas = [];
    } else {
      this.usuarioSeleccionado = email;
      const citas = localStorage.getItem(`citas_${email}`);
      this.citasSeleccionadas = citas ? JSON.parse(citas) : [];
    }
  }

  eliminarCita(index: number) {
    if (this.usuarioSeleccionado) {
      this.citasSeleccionadas.splice(index, 1);
      localStorage.setItem(`citas_${this.usuarioSeleccionado}`, JSON.stringify(this.citasSeleccionadas));
    }
  }
}
