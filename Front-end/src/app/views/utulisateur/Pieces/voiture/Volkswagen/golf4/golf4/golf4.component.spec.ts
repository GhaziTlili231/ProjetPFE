import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf4Component } from './golf4.component';

describe('Golf4Component', () => {
  let component: Golf4Component;
  let fixture: ComponentFixture<Golf4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
