import { NgModule } from '@angular/core';

import { MtxButtonModule } from '@ng-matero/extensions/button';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxNativeDatetimeModule } from '@ng-matero/extensions/core';



const MTX = [
  MtxButtonModule,
  MtxGridModule,
  MtxSelectModule,
  MtxDatetimepickerModule,
  MtxNativeDatetimeModule
]

@NgModule({
  exports: [
    MTX
  ]
})
export class MtxModule { }