import { Routes } from '@angular/router';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
  {
    path: 'formulario',
    loadComponent: () =>
      import('./paginas/formulario-contato/formulario-contato.component').then(
        (m) => m.FormularioContatoComponent
      ),
  },
  {
    path: 'formulario/:id',
    loadComponent: () =>
      import('./paginas/formulario-contato/formulario-contato.component').then(
        (m) => m.FormularioContatoComponent
      ),
  },
  {
    path: 'lista',
    loadComponent: () =>
      import('./paginas/lista-contatos/lista-contatos.component').then(
        (m) => m.ListaContatosComponent
      ),
  },
  {
    path: '',
    redirectTo: '/lista',
    pathMatch: 'full',
  },
  {
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent,
  },
];
