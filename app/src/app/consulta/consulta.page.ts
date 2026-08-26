import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonButtons,
  IonButton,
} from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CreditoService } from '../services/credito.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonCard,
    IonCardContent,
    IonButtons,
    IonButton,
  ],
})
export class ConsultaPage implements OnInit {
  private creditoService = inject(CreditoService);

  creditos: any[] = [];
  creditosFiltrados: any[] = [];
  cargando = false;

  ngOnInit() {
    this.cargarCreditos();
  }
  cargarCreditos() {
    this.cargando = true;
    this.creditoService.obtenerCreditos().subscribe({
      next: (data) => {
        this.creditos = data || [];
        this.creditosFiltrados = this.creditos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar los créditos:', err);
        this.cargando = false;
      },
    });
  }

  filtrarCreditos(event: any) {
    const texto = event.target.value ? event.target.value.toLowerCase() : '';
    this.creditosFiltrados = this.creditos.filter(
      (c) =>
        c.nombreCliente.toLowerCase().includes(texto) ||
        c.cedula.includes(texto),
    );
  }
}
