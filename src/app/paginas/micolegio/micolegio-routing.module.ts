import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicolegioPage } from './micolegio.page';

const routes: Routes = [
  {
    path: '',
    component: MicolegioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicolegioPageRoutingModule {}
