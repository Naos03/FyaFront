import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { ConsultaPage } from './consulta/consulta.page';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'consulta',
    component: ConsultaPage,
  },
  {
    path: 'consulta',
    component: ConsultaPage,
    canActivate: [authGuard],
  },
];
