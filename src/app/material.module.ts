import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

const modules = [
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
