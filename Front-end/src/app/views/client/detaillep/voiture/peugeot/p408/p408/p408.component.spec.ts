import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P408Component } from './p408.component';

describe('P408Component', () => {
  let component: P408Component;
  let fixture: ComponentFixture<P408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P408Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
