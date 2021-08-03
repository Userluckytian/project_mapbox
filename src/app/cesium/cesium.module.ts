import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CesiumComponent } from './cesium.component';
import { CesiumRoutes } from './cesium.routing';
import { CesiumDirective } from './directive/cesium.directive';

@NgModule({
  imports: [
    CommonModule,
    CesiumRoutes
  ],
  declarations: [CesiumComponent, CesiumDirective]
})
export class CesiumModule { }
