import { Component, OnInit } from '@angular/core';
import data from './q-a.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  qsAs;
  constructor() { }

  ngOnInit() {
    this.qsAs = data.questions_answers;

    this.qsAs = this.qsAs.map(question => {
      question.isAnswered = false;
      return question;
    });

  }

  onQuestionClick(answElem, qaPair){
    answElem.hidden = !answElem.hidden;
    qaPair.isAnswered = !qaPair.isAnswered;
  }

}
