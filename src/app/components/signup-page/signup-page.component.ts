import { Component, OnInit, AfterViewInit } from '@angular/core';
import data from './q-a.json';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: [
    './signup-page.component.css',
    './signup-page-mw1100px.component.css',
    './signup-page-mw800px.component.css'
  ]
})
export class SignupPageComponent implements OnInit, AfterViewInit {
  qsAs;
  constructor() { }

  ngOnInit() {
    this.qsAs = data.questions_answers;

    this.qsAs = this.qsAs.map(question => {
      question.isAnswered = false;
      return question;
    });

  }
  ngAfterViewInit() {
    document.body.scrollTop = 0;
  }

  onQuestionClick(answElem, qaPair){
    answElem.hidden = !answElem.hidden;
    qaPair.isAnswered = !qaPair.isAnswered;
  }

}
