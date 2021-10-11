import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanalSecundarioPage } from './canal-secundario.page';

const routes: Routes = [
  {
    path: '',
    component: CanalSecundarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanalSecundarioPageRoutingModule {}
