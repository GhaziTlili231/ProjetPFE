import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf7Component } from './golf7.component';

describe('Golf7Component', () => {
  let component: Golf7Component;
  let fixture: ComponentFixture<Golf7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
