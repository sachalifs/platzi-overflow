import { Component, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Answer } from './answer.model'
import { User } from '../auth/user.model'
import { Question } from '../question/question.model'
import SweetScroll from 'sweet-scroll'
import { QuestionService } from '../question/question.service'

@Component({
  selector: 'answer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
    form {
      margin-top: 20px;
    }
  `],
  providers: [QuestionService]
})
export class AnswerFormComponent {
  @Input() question: Question
  sweetScroll: SweetScroll

  constructor(
    private questionService: QuestionService,
    private router: Router,
  ) {
    this.sweetScroll = new SweetScroll
  }

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
      this.question,
      new Date(),
      new User(
        'sacha@platzi.com',
        '123456',
        'Sacha',
        'Lifszyc'
      )
    )
    this.questionService.addAnswer(answer)
      .subscribe(
        (a) => {
          this.question.answers.unshift(a)
          this.sweetScroll.to('#answers-title')
          form.reset()
        },
        error => console.log(error)
      )
    form.resetForm()
  }
}
