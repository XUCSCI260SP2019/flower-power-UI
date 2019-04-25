import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedRequestsComponent } from './unapproved-requests.component';

describe('UnapprovedRequestsComponent', () => {
  let component: UnapprovedRequestsComponent;
  let fixture: ComponentFixture<UnapprovedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnapprovedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
