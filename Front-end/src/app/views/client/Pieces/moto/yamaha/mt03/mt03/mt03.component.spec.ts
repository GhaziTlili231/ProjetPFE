import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt03Component } from './mt03.component';

describe('Mt03Component', () => {
  let component: Mt03Component;
  let fixture: ComponentFixture<Mt03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mt03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mt03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
