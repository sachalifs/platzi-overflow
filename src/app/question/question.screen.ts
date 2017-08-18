import { Component } from '@angular/core';

@Component({
  selector: 'question-screen',
  templateUrl: './question.screen.html',
  styles: [`
    .add-question {
      position: fixed;
      z-index: 10;
      bottom: 30px;
      right: 30px;
    }
  `]
})
export class QuestionScreenComponent {}
