import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxmapComponent } from './boxmap.component';
import { BoxmapRoutes } from './boxmap.routing';

@NgModule({
  imports: [
    CommonModule,
    BoxmapRoutes
  ],
  declarations: [BoxmapComponent]
})
export class BoxmapModule { }
