import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

const antZORRO = [
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...antZORRO
  ],
  declarations: [],
  exports: [...antZORRO]
})
export class ShareModule { }
