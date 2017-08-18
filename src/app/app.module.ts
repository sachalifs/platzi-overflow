import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Anuglar2-Moment
import { MomentModule } from 'angular2-moment'

import { AppComponent } from './app.component'

// Screens
import { SinginScreenComponent } from './auth/signin.screen'
import { SignupScreenComponent } from './auth/signup.screen'
import { QuestionScreenComponent } from './question/question.screen'

// Components
import { QuestionListComponent } from './question/question-list.component'
import { QuestionDetailComponent } from './question/question-detail.component'
import { QuestionFormComponent } from './question/question-form.component'
import { AnswerFormComponent } from './answer/answer-form.component'

// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SinginScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionScreenComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
