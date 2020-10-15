import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mapstatic', pathMatch: 'full' },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
  },
  {
    path: 'mapquery',
    loadChildren: () => import('./boxmap/boxmap.module').then(m => m.BoxmapModule),
  },
  {
    path: 'mapstatic',
    loadChildren: () => import('./mapstatic/mapstatic.module').then(m => m.MapstaticModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
