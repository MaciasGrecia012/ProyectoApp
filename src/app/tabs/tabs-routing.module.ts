import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'rutas',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tienda',
        loadChildren: () => import('../tienda/tienda.module').then(m => m.TiendaPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../videos/videos.module').then( m => m.VideosPageModule)
      },
      {
        path: 'membresias',
        loadChildren: () => import('../membresias/membresias.module').then( m => m.MembresiasPageModule)
      },
      {
        path: 'redes-sociales',
        loadChildren: () => import('../redes-sociales/redes-sociales.module').then( m => m.RedesSocialesPageModule)
      },
      {
        path: 'canal-secundario',
        loadChildren: () => import('../canal-secundario/canal-secundario.module').then( m => m.CanalSecundarioPageModule)
      },
      {
        path: 'pagina-web',
        loadChildren: () => import('../pagina-web/pagina-web.module').then( m => m.PaginaWebPageModule)
      },
      {
        path: 'donaciones',
        loadChildren: () => import('../donaciones/donaciones.module').then( m => m.DonacionesPageModule)
      },
      {
        path: 'ajustes',
        loadChildren: () => import('../ajustes/ajustes.module').then( m => m.AjustesPageModule)
      },
      {
        path: 'comunicados',
        loadChildren: () => import('../comunicados/comunicados.module').then( m => m.ComunicadosPageModule)
      },
      {
        path:'',
        redirectTo: '/tabs/rutas/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rutas/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class TabsPageRoutingModule {}
