import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf3Component } from './golf3.component';

describe('Golf3Component', () => {
  let component: Golf3Component;
  let fixture: ComponentFixture<Golf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
