import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'Esta es una nueva pregunta sobre Android',
    'Miren, tengo una duda con una aplicación que estoy haciendo en Android...',
    new Date,
    'devicon-android-plain'
  )
}
