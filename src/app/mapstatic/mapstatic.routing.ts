import { Routes, RouterModule } from '@angular/router';
import { MapstaticComponent } from './mapstatic.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: MapstaticComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapstaticRoutes { }
