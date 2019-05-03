import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfMenuComponent } from './prof-menu.component';

describe('ProfMenuComponent', () => {
  let component: ProfMenuComponent;
  let fixture: ComponentFixture<ProfMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
