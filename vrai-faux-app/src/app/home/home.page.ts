import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Question } from './Question';
import { shuffle } from './utils';

const API = "http://localhost:3000/questions";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgDir: string = "assets/vrai-faux-app-assets/";
  questions: Question[] | null;
  questionIndex: number;
  score: number;
  lives: number[];
  hasAnswered: boolean;
  isCorrectAnswer: boolean;
  isGameOver: boolean;

  constructor(private http: HttpClient) {
    this.initProps();
  }

  startGame() {
    this.http.get(API)
      .subscribe((questions: Question[]) => {
        this.questions = shuffle(questions);
      })
  }

  giveAnswer(answer: boolean) {
    this.hasAnswered = true;

    if (this.isCorrectAnswer = 
        answer == this.questions[this.questionIndex].correct) {
      this.score++;
    } else {
      this.lives.splice(0,1);
    }

    this.isGameOver = 
      this.questionIndex >= this.questions.length - 1 ||
      this.lives.length == 0;

  }

  toNextQuestion() {
    this.hasAnswered = false;
    this.questionIndex++;
  }

  initProps() {
    this.questions = null;
    this.questionIndex = 0;
    this.hasAnswered = false;
    this.isGameOver = false;
    this.lives = Array(3); // pour afficher 3 coeurs
    this.isCorrectAnswer = false;
    this.score = 0;
  }

}
