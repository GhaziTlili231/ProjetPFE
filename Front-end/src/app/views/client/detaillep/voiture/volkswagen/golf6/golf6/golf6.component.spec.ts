import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf6Component } from './golf6.component';

describe('Golf6Component', () => {
  let component: Golf6Component;
  let fixture: ComponentFixture<Golf6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
