import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./paginas/datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'panico',
    loadChildren: () => import('./paginas/panico/panico.module').then( m => m.PanicoPageModule)
  },
  {
    path: 'colegio',
    loadChildren: () => import('./paginas/colegio/colegio.module').then( m => m.ColegioPageModule)
  },
  {
    path: 'addcolegio',
    loadChildren: () => import('./paginas/addcolegio/addcolegio.module').then( m => m.AddcolegioPageModule)
  },
  {
    path: 'micolegio',
    loadChildren: () => import('./paginas/micolegio/micolegio.module').then( m => m.MicolegioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
