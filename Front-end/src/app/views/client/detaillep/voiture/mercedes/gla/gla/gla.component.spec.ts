import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaComponent } from './gla.component';

describe('GlaComponent', () => {
  let component: GlaComponent;
  let fixture: ComponentFixture<GlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
