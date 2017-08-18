import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdToolbarModule,
  MdCardModule
} from '@angular/material';

const modules = [
  MdIconModule,
  MdToolbarModule,
  MdCardModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
