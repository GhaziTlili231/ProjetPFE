import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Golf2Component } from './golf2.component';

describe('Golf2Component', () => {
  let component: Golf2Component;
  let fixture: ComponentFixture<Golf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Golf2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Golf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
