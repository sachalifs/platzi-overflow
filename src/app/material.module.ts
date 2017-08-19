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
  MdProgressSpinnerModule,
  MdSnackBarModule
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
  MdProgressSpinnerModule,
  MdSnackBarModule
]

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
