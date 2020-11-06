import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcolegioPageRoutingModule } from './addcolegio-routing.module';

import { AddcolegioPage } from './addcolegio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcolegioPageRoutingModule
  ],
  declarations: [AddcolegioPage]
})
export class AddcolegioPageModule {}
