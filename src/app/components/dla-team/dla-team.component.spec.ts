import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlaTeamComponent } from './dla-team.component';

describe('DlaTeamComponent', () => {
  let component: DlaTeamComponent;
  let fixture: ComponentFixture<DlaTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlaTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
