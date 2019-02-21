import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rater',
  templateUrl: './stars-rater.component.html',
  styleUrls: ['./stars-rater.component.css']
})
export class StarsRaterComponent implements OnInit {
  _stars: Array<number> = [];
  _rate: string;

  @Input()
  set stars(num: string) {
    let n = +num;
    while (n > 0) {
      this._stars.push(n);
      n--;
    }
  }

  @Input()
  set rate(num: string) {
    this._rate = (+num) * 20 + '%';
  }
  constructor() { }

  ngOnInit() {
  }

}
