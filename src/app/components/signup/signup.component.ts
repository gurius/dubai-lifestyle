import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  fnameCtrl: FormControl;
  lnameCtrl: FormControl;
  emailCtrl: FormControl;
  passCtrl: FormControl;
  codeCtrl: FormControl;
  phoneCtrl: FormControl;
  fGroup: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.fnameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.lnameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.passCtrl = fb.control('', [Validators.required, Validators.minLength(8)]);
    this.codeCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2)
    ]);
    this.phoneCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(7)
    ]);

    this.fGroup = fb.group({
      fname: this.fnameCtrl,
      lname: this.lnameCtrl,
      email: this.emailCtrl,
      pass: this.passCtrl,
      code: this.codeCtrl,
      phone: this.phoneCtrl
    });
  }

  ngOnInit() {
  this.router.queryParamMap.subscribe(params => {
    this.fnameCtrl.setValue(params.get('name') || '');
    this.emailCtrl.setValue(params.get('email') || '');
  });
  }

  signup(){
    alert('Congratulations, you have signup to The Dubai Lifestyle App!')
  }
}
