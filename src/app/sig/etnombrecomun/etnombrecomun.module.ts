import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EtnombrecomunPage } from './etnombrecomun.page';

const routes: Routes = [
  {
    path: '',
    component: EtnombrecomunPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EtnombrecomunPage]
})
export class EtnombrecomunPageModule {}
