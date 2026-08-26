import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:9090/api/creditos';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer token-secreto-fya-2026',
    });
  }

  obtenerCreditos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  registrarCredito(credito: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, credito, {
      headers: this.getHeaders(),
    });
  }
}
