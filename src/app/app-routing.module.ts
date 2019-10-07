import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'login', loadChildren: './sig/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './sig/menu/menu.module#MenuPageModule' },
  { path: 'calidad-h', loadChildren: './sig/calidad-h/calidad-h.module#CalidadHPageModule' },
  { path: 'etnobotanica', loadChildren: './sig/etnobotanica/etnobotanica.module#EtnobotanicaPageModule' },
  { path: 'chhogar', loadChildren: './sig/chhogar/chhogar.module#ChhogarPageModule' },
  { path: 'chsincobertura', loadChildren: './sig/chsincobertura/chsincobertura.module#ChsincoberturaPageModule' },
  { path: 'chexterior', loadChildren: './sig/chexterior/chexterior.module#ChexteriorPageModule' },
  { path: 'etnombrecomun', loadChildren: './sig/etnombrecomun/etnombrecomun.module#EtnombrecomunPageModule' },
  { path: 'etfoto', loadChildren: './sig/etfoto/etfoto.module#EtfotoPageModule' },
  { path: 'etuso', loadChildren: './sig/etuso/etuso.module#EtusoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
