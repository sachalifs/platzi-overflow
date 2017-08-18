import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { QuestionDetailComponent } from './question/question-detail.component'

// Material Components
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
