import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F500Component } from './f500.component';

describe('F500Component', () => {
  let component: F500Component;
  let fixture: ComponentFixture<F500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F500Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
