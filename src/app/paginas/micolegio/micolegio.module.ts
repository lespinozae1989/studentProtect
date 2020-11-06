import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicolegioPageRoutingModule } from './micolegio-routing.module';

import { MicolegioPage } from './micolegio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicolegioPageRoutingModule
  ],
  declarations: [MicolegioPage]
})
export class MicolegioPageModule {}
