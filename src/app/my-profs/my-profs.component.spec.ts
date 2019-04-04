import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfsComponent } from './my-profs.component';

describe('MyProfsComponent', () => {
  let component: MyProfsComponent;
  let fixture: ComponentFixture<MyProfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
