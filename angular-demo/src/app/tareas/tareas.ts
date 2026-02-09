import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para que funcione el formulario

interface Tarea {
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas implements OnInit {

  // Variables que pide el HTML
  nuevaTarea: string = '';
  listaTareas: Tarea[] = [];

  ngOnInit() {
    // Al iniciar, intentamos cargar tareas guardadas
    const tareasGuardadas = localStorage.getItem('misTareas');
    if (tareasGuardadas) {
      this.listaTareas = JSON.parse(tareasGuardadas);
    }
  }

  // Función para añadir
  agregarTarea() {
    if (this.nuevaTarea.trim().length === 0) return;

    this.listaTareas.push({
      texto: this.nuevaTarea,
      completada: false
    });

    this.nuevaTarea = ''; // Limpiar el input
    this.guardarEnLocalStorage();
  }

  // Función para eliminar
  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);
    this.guardarEnLocalStorage();
  }

  // Función para guardar cambios (checkbox)
  toggleCompletada() {
    this.guardarEnLocalStorage();
  }

  // Guardar en el navegador
  guardarEnLocalStorage() {
    localStorage.setItem('misTareas', JSON.stringify(this.listaTareas));
  }
}
