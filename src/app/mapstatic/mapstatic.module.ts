import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapstaticComponent } from './mapstatic.component';
import { MapstaticRoutes } from './mapstatic.routing';

@NgModule({
  imports: [
    CommonModule,
    MapstaticRoutes
  ],
  declarations: [MapstaticComponent]
})
export class MapstaticModule { }
