import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './base.signup.component.css',
    './desktop.signup.component.css',     //  device specific
    './mobile.signup.component.css',      //  device specific
    './top-case.signup.component.css',    //  case specific
    './bottom-case.signup.component.css'   //  case specific
  ]
})
export class SignupComponent implements OnInit {

  @Input('is-top') isTop: boolean;
  @Input('is-bottom') isBottom: boolean;

  constructor() { }

  ngOnInit() {
  }

}
