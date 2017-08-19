import { Injectable } from '@angular/core'
import { Question } from './question.model'
import { Answer } from '../answer/answer.model'
import { Http, Response, Headers } from '@angular/http'
import urljoin from 'url-join'
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx'
import { Observable } from 'rxjs'

@Injectable()
export class QuestionService {
    private questionsUrl: string;

    constructor (private http: Http) {
      this.questionsUrl = urljoin(environment.apiUrl, 'questions')
    }

    // get("/api/questions")
    getQuestions(sort = '-createdAt'): Promise<void | Question[]> {
      return this.http.get(`${this.questionsUrl}?sort=${sort}`)
                 .toPromise()
                 .then(response => response.json() as Question[])
                 .catch(this.handleError);
    }

    // get("/api/questions/:id")
    getQuestion(id): Promise<void | Question> {
      const url = urljoin(this.questionsUrl, id)
      return this.http.get(url)
                 .toPromise()
                 .then(response => response.json() as Question)
                 .catch(this.handleError);
    }

    addQuestion(question: Question) {
      const body = JSON.stringify(question)
      const headers = new Headers({'Content-Type': 'application/json'})
      const token = this.getToken()

      return this.http.post(this.questionsUrl + token, body, { headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()))
    }

    addAnswer(answer: Answer) {
      const token = this.getToken()
      const url = urljoin(this.questionsUrl, answer.question._id, 'answers')
      const body = JSON.stringify(answer)
      const headers = new Headers({'Content-Type': 'application/json'})

      return this.http.post(url + token, body, { headers })
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()))
    }

    getToken() {
      return localStorage.getItem('token') ?
        `?token=${localStorage.getItem('token')}` :
        ''
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
    }
}
