import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P206Component } from './p206.component';

describe('P206Component', () => {
  let component: P206Component;
  let fixture: ComponentFixture<P206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P206Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
