import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoxmapComponent } from './boxmap.component';

const routes: Routes = [
  {
    path: '',
    component: BoxmapComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxmapRoutes { }