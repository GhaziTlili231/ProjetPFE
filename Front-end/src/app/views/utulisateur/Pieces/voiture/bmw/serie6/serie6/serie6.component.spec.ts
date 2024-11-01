import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serie6Component } from './serie6.component';

describe('Serie6Component', () => {
  let component: Serie6Component;
  let fixture: ComponentFixture<Serie6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serie6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
