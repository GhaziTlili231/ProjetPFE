import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportageComponent } from './sportage.component';

describe('SportageComponent', () => {
  let component: SportageComponent;
  let fixture: ComponentFixture<SportageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
