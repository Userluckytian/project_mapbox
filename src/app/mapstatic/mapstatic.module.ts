import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapstaticComponent } from './mapstatic.component';
import { MapstaticRoutes } from './mapstatic.routing';
import { OlMeasureComponent } from './components/ol-measure/ol-measure.component';
import { OlDrawComponent } from './components/ol-draw/ol-draw.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    MapstaticRoutes,
    ShareModule
  ],
  declarations: [
    MapstaticComponent,
    OlMeasureComponent,
    OlDrawComponent]
})
export class MapstaticModule { }
