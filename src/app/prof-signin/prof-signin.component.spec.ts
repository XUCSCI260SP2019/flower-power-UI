import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSigninComponent } from './prof-signin.component';

describe('ProfSigninComponent', () => {
  let component: ProfSigninComponent;
  let fixture: ComponentFixture<ProfSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
