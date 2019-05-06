import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfBarComponent } from './prof-bar.component';

describe('ProfBarComponent', () => {
  let component: ProfBarComponent;
  let fixture: ComponentFixture<ProfBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
