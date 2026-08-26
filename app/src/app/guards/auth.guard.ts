import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    console.warn(
      'Acceso denegado por el Guard de Seguridad: Token no encontrado.',
    );
    router.navigate(['/home']);
    return false;
  }
};
