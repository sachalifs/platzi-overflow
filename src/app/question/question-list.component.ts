import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service'

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styles: [`
    i {
      font-size: 48px;
    }

    i.help {
      width: 48px !important;
      height: 48px !important;
      padding: 0 !important;
      font-size: 48px !important;
    }
  `],
  providers: [QuestionService]
})
export class QuestionListComponent {

  questions: Question[]
  loading: boolean = false

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.loading = true
    this.questionService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions
        this.loading = false
      });
  }
}
