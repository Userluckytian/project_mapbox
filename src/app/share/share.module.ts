import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

const antZORRO = [
  NzButtonModule,
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
