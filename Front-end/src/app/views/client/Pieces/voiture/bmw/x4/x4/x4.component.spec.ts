import { ComponentFixture, TestBed } from '@angular/core/testing';

import { X4Component } from './x4.component';

describe('X4Component', () => {
  let component: X4Component;
  let fixture: ComponentFixture<X4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ X4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(X4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
