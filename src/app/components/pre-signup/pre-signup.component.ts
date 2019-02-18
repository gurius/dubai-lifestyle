import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-signup',
  templateUrl: './pre-signup.component.html',
  styleUrls: [
    '../signup/base.signup.component.css',
    './pre-signup.component.css',
    './pre-signup-mw550px.component.css'
  ]
})
export class PreSignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSignup(user) {
    const { userName: name, userEmail: email } = user;
    this.router.navigate(['/signup'], { queryParams: { name, email } });
  }
}
