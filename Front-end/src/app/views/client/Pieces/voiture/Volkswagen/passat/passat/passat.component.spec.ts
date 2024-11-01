import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassatComponent } from './passat.component';

describe('PassatComponent', () => {
  let component: PassatComponent;
  let fixture: ComponentFixture<PassatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
