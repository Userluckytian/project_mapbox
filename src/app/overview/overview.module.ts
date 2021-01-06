import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';

import { LeftUpComponent } from './components/left-up/left-up.component';
import { MidBottomComponent } from './components/mid-bottom/mid-bottom.component';
import { MidTopComponent } from './components/mid-top/mid-top.component';
import { RightComponent } from './components/right/right.component';
import { RightBottomComponent } from './components/right-bottom/right-bottom.component';
import { RightTopComponent } from './components/right-top/right-top.component';
import { LeftMidComponent } from './components/left-mid/left-mid.component';
import { LeftBottomComponent } from './components/left-bottom/left-bottom.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverviewRoutes } from './overview.routing';
import { ShareModule } from '../share/share.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OverviewRoutes,
    ShareModule
  ],
  declarations: [
    OverviewComponent,
    LeftUpComponent,
    MidBottomComponent,
    MidTopComponent,
    RightComponent,
    RightBottomComponent,
    RightTopComponent,
    LeftMidComponent,
    LeftBottomComponent]
})
export class OverviewModule { }
