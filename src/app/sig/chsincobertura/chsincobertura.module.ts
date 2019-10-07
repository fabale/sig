import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChsincoberturaPage } from './chsincobertura.page';

const routes: Routes = [
  {
    path: '',
    component: ChsincoberturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChsincoberturaPage]
})
export class ChsincoberturaPageModule {}
