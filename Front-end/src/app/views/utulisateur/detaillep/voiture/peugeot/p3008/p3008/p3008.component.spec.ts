import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3008Component } from './p3008.component';

describe('P3008Component', () => {
  let component: P3008Component;
  let fixture: ComponentFixture<P3008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P3008Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P3008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
