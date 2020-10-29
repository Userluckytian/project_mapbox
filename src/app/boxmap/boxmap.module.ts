import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxmapComponent } from './boxmap.component';
import { BoxmapRoutes } from './boxmap.routing';
import { BoxmapService } from './boxmap.service';
import { DrawToolsComponent } from './components/draw-tools/draw-tools.component';
import { MeasureToolsComponent } from './components/measure-tools/measure-tools.component';
import { ShareModule } from '../share/share.module';
@NgModule({
  imports: [
    CommonModule,
    BoxmapRoutes,
    ShareModule
  ],
  declarations: [BoxmapComponent, DrawToolsComponent, MeasureToolsComponent],
  providers:[BoxmapService]
})
export class BoxmapModule { }
