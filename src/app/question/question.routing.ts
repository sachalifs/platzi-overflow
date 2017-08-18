import { Routes, RouterModule } from '@angular/router';
import { QuestionScreenComponent } from './question.screen';
import { QuestionFormComponent } from './question-form.component';
import { QuestionDetailComponent } from './question-detail.component'

export const QUESTION_ROUTES = [
  { path: '', component: QuestionScreenComponent },
  { path: 'new', component: QuestionFormComponent },
  { path: ':id', component: QuestionDetailComponent, pathMatch: 'full' },
]
