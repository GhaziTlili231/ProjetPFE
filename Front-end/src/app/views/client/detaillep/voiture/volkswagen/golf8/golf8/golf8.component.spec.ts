import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf8Component } from './golf8.component';

describe('Golf8Component', () => {
  let component: Golf8Component;
  let fixture: ComponentFixture<Golf8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
