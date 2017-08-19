import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { QuestionService } from './question.service'
import { Question } from './question.model'
import icons from './icons'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styles: [`
    i {
      font-size: 48px;
    }

    small {
      display: block;
    }
  `],
  providers: [QuestionService]
})
export class QuestionFormComponent {
  icons: Array<Object> = icons

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private authService: AuthService
  ) {}

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description,
      null,
      form.value.icon
    )
    this.questionService.addQuestion(q)
      .subscribe(
        ({ _id }) => this.router.navigate(['/questions', _id]),
        this.authService.handleError
      )
    form.resetForm()
  }
}
