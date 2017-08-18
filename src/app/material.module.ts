import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdTabsModule
} from '@angular/material';

const modules = [
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdTabsModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
