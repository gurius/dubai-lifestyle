import { Component, OnInit } from '@angular/core';
import user_data from './live-accounts.data.json'

@Component({
  selector: 'app-live-accounts',
  templateUrl: './live-accounts.component.html',
  styleUrls: ['./live-accounts.component.css']
})
export class LiveAccountsComponent implements OnInit {
  private data;
  constructor() { }

  ngOnInit() {
    this.data = user_data.user_one.records;
  }

}
