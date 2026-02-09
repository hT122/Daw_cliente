import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passsword',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './passsword.html', // Asegúrate de que coincida con tu nombre de archivo
  styleUrl: './passsword.css'
})
export class Passsword { // El nombre debe coincidir con tu import del router

  // Opciones de configuración
  longitud: number = 12;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = false;

  passwordGenerada: string = '';
  mensajeCopia: string = '';

  // Caracteres disponibles
  private letrasMayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private letrasMinus = 'abcdefghijklmnopqrstuvwxyz';
  private numeros = '0123456789';
  private simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generarPassword() {
    let caracteresPermitidos = '';

    if (this.incluirMayusculas) caracteresPermitidos += this.letrasMayus;
    if (this.incluirMinusculas) caracteresPermitidos += this.letrasMinus;
    if (this.incluirNumeros) caracteresPermitidos += this.numeros;
    if (this.incluirSimbolos) caracteresPermitidos += this.simbolos;

    // Validación: Si no selecciona nada, usamos minúsculas por defecto
    if (caracteresPermitidos === '') {
      caracteresPermitidos = this.letrasMinus;
      this.incluirMinusculas = true;
    }

    let resultado = '';
    for (let i = 0; i < this.longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      resultado += caracteresPermitidos.charAt(indiceAleatorio);
    }

    this.passwordGenerada = resultado;
    this.mensajeCopia = ''; // Limpiar mensaje anterior
  }

  copiarAlPortapapeles() {
    if (!this.passwordGenerada) return;

    navigator.clipboard.writeText(this.passwordGenerada).then(() => {
      this.mensajeCopia = '¡Copiada!';
      setTimeout(() => this.mensajeCopia = '', 2000); // Ocultar mensaje a los 2s
    });
  }
}
