import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  apellido: string = '';
  rangoMax: number | null = null;
  intentos: number | null = null;
  numeroAleatorio: number | null = null;
  numeroIngresado: number | null = null;
  mensaje: string = '';
  juegoIniciado: boolean = false;
  botonActivo: boolean = false;

  // Validación del formulario
  validarFormulario(): boolean {
    const valido = this.nombre.trim() !== '' && 
                   this.apellido.trim() !== '' && 
                   this.rangoMax !== null && 
                   this.rangoMax >= 4 && 
                   this.intentos !== null && 
                   this.intentos >= 1; // Aseguramos que los intentos sean >= 1
    this.botonActivo = valido;
    return valido;
  }

  // Validación de cada campo
  get nombreValido(): boolean {
    return this.nombre.trim() !== '';
  }

  get apellidoValido(): boolean {
    return this.apellido.trim() !== '';
  }

  get rangoMaxValido(): boolean {
    return this.rangoMax !== null && this.rangoMax >= 4;
  }

  get intentosValido(): boolean {
    return this.intentos !== null && this.intentos >= 1;
  }

  iniciarJuego() {
    if (this.validarFormulario()) {
      this.numeroAleatorio = Math.floor(Math.random() * this.rangoMax!);
      this.juegoIniciado = true;
    }
  }

  comprobarNumero() {
    if (this.numeroIngresado === this.numeroAleatorio) {
      this.mensaje = 'Has Ganado';
    } else if (this.numeroIngresado! > this.numeroAleatorio!) {
      this.mensaje = 'Te pasaste';
    } else {
      const diferencia = this.numeroAleatorio! - this.numeroIngresado!;
      if (diferencia === 1) {
        this.mensaje = 'Caliente';
      } else if (diferencia === 2) {
        this.mensaje = 'Templado';
      } else {
        this.mensaje = 'Frío';
      }
    }
  }
}
