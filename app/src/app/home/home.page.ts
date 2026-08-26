import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
  IonButtons,
  IonText,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CreditoService } from '../services/credito.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonToast,
    IonButtons,
    IonText,
  ],
})
export class HomePage {
  private creditoService = inject(CreditoService);

  creditoForm: FormGroup;
  isToastOpen = false;
  toastMessage = '';
  toastColor = 'success';

  constructor() {
    this.creditoForm = new FormGroup({
      nombreCliente: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      cedula: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{6,10}$/),
      ]),
      valorCredito: new FormControl('', [
        Validators.required,
        Validators.min(100000),
      ]),
      tasaInteres: new FormControl('', [
        Validators.required,
        Validators.min(0.1),
        Validators.max(100),
      ]),
      plazoMeses: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(360),
      ]),
      comercial: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.creditoForm.valid) {
      this.creditoService.registrarCredito(this.creditoForm.value).subscribe({
        next: (response) => {
          console.log('Crédito registrado con éxito:', response);
          this.mostrarToast('¡Crédito registrado exitosamente!', 'success');
          this.creditoForm.reset();
        },
        error: (err) => {
          console.error('Error al registrar el crédito:', err);
          this.mostrarToast(
            'Error al conectar con el servidor. Intente nuevamente.',
            'danger',
          );
        },
      });
    } else {
      this.creditoForm.markAllAsTouched();
      this.mostrarToast(
        'Por favor corrige los campos inválidos del formulario.',
        'warning',
      );
    }
  }

  mostrarToast(mensaje: string, color: string) {
    this.toastMessage = mensaje;
    this.toastColor = color;
    this.isToastOpen = true;
  }
}
