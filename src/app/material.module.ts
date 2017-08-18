import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdToolbarModule
} from '@angular/material';

const modules = [
  MdIconModule,
  MdToolbarModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
