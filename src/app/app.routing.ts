import { Routes, RouterModule } from '@angular/router';
import { QuestionScreenComponent } from './question/question.screen';
import { SigninScreenComponent } from './auth/signin.screen';
import { SignupScreenComponent } from './auth/signup.screen';
import { AppComponent } from './app.component'
import { QUESTION_ROUTES } from './question/question.routing'

const APP_ROUTES = [
  { path: '', component: QuestionScreenComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninScreenComponent },
  { path: 'signup', component: SignupScreenComponent },
  { path: 'questions', children: QUESTION_ROUTES }
]

export const Routing = RouterModule.forRoot(APP_ROUTES)
