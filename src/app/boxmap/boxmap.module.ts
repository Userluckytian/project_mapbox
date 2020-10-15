import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxmapComponent } from './boxmap.component';
import { BoxmapRoutes } from './boxmap.routing';
import { BoxmapService } from './boxmap.service';

@NgModule({
  imports: [
    CommonModule,
    BoxmapRoutes
  ],
  declarations: [BoxmapComponent],
  providers:[BoxmapService]
})
export class BoxmapModule { }
