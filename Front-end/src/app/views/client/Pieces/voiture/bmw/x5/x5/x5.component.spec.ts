import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X5Component } from './x5.component';

describe('X5Component', () => {
  let component: X5Component;
  let fixture: ComponentFixture<X5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
