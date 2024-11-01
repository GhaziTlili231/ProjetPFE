import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rav4Component } from './rav4.component';

describe('Rav4Component', () => {
  let component: Rav4Component;
  let fixture: ComponentFixture<Rav4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rav4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rav4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
