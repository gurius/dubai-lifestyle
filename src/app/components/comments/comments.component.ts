import { Component, OnInit } from '@angular/core';

import data from './comments.data.json';
import { Comment } from './comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<Comment>;
  constructor() { }

  ngOnInit() {
    this.comments = data.comments;
  }

  toDate(dateString) {
    return new Date(dateString);
  }

}
