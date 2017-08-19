import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from './question.model';
import { QuestionService } from './question.service'

@Component({
  selector: 'question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit, OnDestroy {

  question?: Question
  sub: any
  loading: boolean = true

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.loading = true
    this.sub = this.route.params.subscribe(params => {
       this.questionService
        .getQuestion(params.id)
        .then((question: Question) => {
          this.question = question
          this.loading = false
        });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
