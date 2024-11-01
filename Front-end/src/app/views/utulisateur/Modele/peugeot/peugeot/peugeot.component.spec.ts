import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeugeotComponent } from './peugeot.component';

describe('PeugeotComponent', () => {
  let component: PeugeotComponent;
  let fixture: ComponentFixture<PeugeotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeugeotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeugeotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
