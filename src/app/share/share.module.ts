import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MultiDataComponent } from './components/multi-data/multi-data.component';
import { FormsModule } from '@angular/forms';

const antZORRO = [
  NzButtonModule,
  NzIconModule,
  NzDatePickerModule,
  NzSelectModule,
  FormsModule
];
const self = [
  MultiDataComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ...antZORRO
  ],
  declarations: [...self, ],
  exports: [...antZORRO, ...self]
})
export class ShareModule { }
