import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clio3Component } from './clio3.component';

describe('Clio3Component', () => {
  let component: Clio3Component;
  let fixture: ComponentFixture<Clio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Clio3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
