import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X3Component } from './x3.component';

describe('X3Component', () => {
  let component: X3Component;
  let fixture: ComponentFixture<X3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
