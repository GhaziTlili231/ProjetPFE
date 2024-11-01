import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P308Component } from './p308.component';

describe('P308Component', () => {
  let component: P308Component;
  let fixture: ComponentFixture<P308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P308Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
