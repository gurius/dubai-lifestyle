import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-yellow-button',
  templateUrl: './big-yellow-button.component.html',
  styleUrls: [
    './big-yellow-button.component.css',
    './big-yellow-button-mw550px.component.css'
  ]
})
export class BigYellowButtonComponent implements OnInit {

  @Input() btnClass: 'get-access--top' | 'get-access--bottom' | 'get-access--pre-signup';
  @Input() btnDisabled: boolean;

  constructor() { }

  ngOnInit() { }

}
