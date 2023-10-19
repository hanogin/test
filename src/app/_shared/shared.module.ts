import { NgModule } from '@angular/core';

import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MtxModule } from './modules/mtx.module copy';

import { CommonModule } from '@angular/common';

const COMP = [

]

@NgModule({
  declarations: [
    ...COMP,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    MtxModule,
  ],
  exports: [
    MaterialModule,
    MtxModule,

    ReactiveFormsModule,
    FormsModule,

     ...COMP
  ]
})
export class SharedModule { }
