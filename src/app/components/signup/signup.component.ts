import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './base.signup.component.css',
    './top-case.signup.component.css',
    './bottom-case.signup.component.css',
    './signup-mw1100px.component.css',
    './signup-mw800px.component.css',
    './signup-mw550px.component.css',
  ]
})
export class SignupComponent implements OnInit {

  @Input('is-top') isTop: boolean;
  @Input('is-bottom') isBottom: boolean;

  constructor() { }

  ngOnInit() {
  }

}
