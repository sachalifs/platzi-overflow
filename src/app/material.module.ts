import { NgModule } from '@angular/core';
import {
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdTabsModule,
  MdRadioModule,
  MdGridListModule,
  MdProgressSpinnerModule
} from '@angular/material';

const modules = [
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdListModule,
  MdTabsModule,
  MdRadioModule,
  MdGridListModule,
  MdProgressSpinnerModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
