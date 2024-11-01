import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf5Component } from './golf5.component';

describe('Golf5Component', () => {
  let component: Golf5Component;
  let fixture: ComponentFixture<Golf5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
