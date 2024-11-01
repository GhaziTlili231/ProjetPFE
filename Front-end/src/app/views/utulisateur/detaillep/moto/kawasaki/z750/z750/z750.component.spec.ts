import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z750Component } from './z750.component';

describe('Z750Component', () => {
  let component: Z750Component;
  let fixture: ComponentFixture<Z750Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z750Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
