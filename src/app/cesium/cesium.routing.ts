import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CesiumComponent } from './cesium.component';

const routes: Routes = [
  {
    path: '',
    component: CesiumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CesiumRoutes { }