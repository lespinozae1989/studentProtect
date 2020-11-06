import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcolegioPage } from './addcolegio.page';

const routes: Routes = [
  {
    path: '',
    component: AddcolegioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcolegioPageRoutingModule {}
