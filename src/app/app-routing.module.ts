import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

 /* {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },*/
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'membresias',
    loadChildren: () => import('./membresias/membresias.module').then( m => m.MembresiasPageModule)
  },

  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'membresias',
    loadChildren: () => import('./membresias/membresias.module').then( m => m.MembresiasPageModule)
  },
  {
    path: 'redes-sociales',
    loadChildren: () => import('./redes-sociales/redes-sociales.module').then( m => m.RedesSocialesPageModule)
  },
  {
    path: 'canal-secundario',
    loadChildren: () => import('./canal-secundario/canal-secundario.module').then( m => m.CanalSecundarioPageModule)
  },
  {
    path: 'pagina-web',
    loadChildren: () => import('./pagina-web/pagina-web.module').then( m => m.PaginaWebPageModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('./donaciones/donaciones.module').then( m => m.DonacionesPageModule)
  },
  /* {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaPageModule)
  }, */
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'comunicados',
    loadChildren: () => import('./comunicados/comunicados.module').then( m => m.ComunicadosPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
