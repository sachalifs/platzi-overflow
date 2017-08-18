import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Question } from './question.model'
import icons from './icons'

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
})
export class QuestionFormComponent {
  icons: Array<Object> = icons

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description,
      null,
      form.value.icon
    )
    form.resetForm()
  }
}
