import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf1Component } from './golf1.component';

describe('Golf1Component', () => {
  let component: Golf1Component;
  let fixture: ComponentFixture<Golf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
