import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSignupPageComponent } from './pre-signup-page.component';

describe('PreSignupPageComponent', () => {
  let component: PreSignupPageComponent;
  let fixture: ComponentFixture<PreSignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSignupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
