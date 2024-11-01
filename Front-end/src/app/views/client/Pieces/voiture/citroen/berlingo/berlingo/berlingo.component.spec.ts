import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlingoComponent } from './berlingo.component';

describe('BerlingoComponent', () => {
  let component: BerlingoComponent;
  let fixture: ComponentFixture<BerlingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerlingoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerlingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
