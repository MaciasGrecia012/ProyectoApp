import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanalSecundarioPageRoutingModule } from './canal-secundario-routing.module';

import { CanalSecundarioPage } from './canal-secundario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanalSecundarioPageRoutingModule
  ],
  declarations: [CanalSecundarioPage]
})
export class CanalSecundarioPageModule {}
