import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Anuglar2-Moment
import { MomentModule } from 'angular2-moment'

import { AppComponent } from './app.component'

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
    MaterialModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
