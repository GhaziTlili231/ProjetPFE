import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Z1000Component } from './z1000.component';

describe('Z1000Component', () => {
  let component: Z1000Component;
  let fixture: ComponentFixture<Z1000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Z1000Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Z1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
