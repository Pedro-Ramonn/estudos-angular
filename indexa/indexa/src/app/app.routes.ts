import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'formulario',
        loadComponent: () => import('./paginas/formulario-contato/formulario-contato.component').then(m => m.FormularioContatoComponent),
    },
    {
        path: 'lista',
        loadComponent: () => import('./paginas/lista-contatos/lista-contatos.component').then(m => m.ListaContatosComponent),
    },
    {
        path: '',
        redirectTo: '/lista',
        pathMatch: 'full',
    },
];
