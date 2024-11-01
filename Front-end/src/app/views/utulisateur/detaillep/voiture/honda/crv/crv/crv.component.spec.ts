import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrvComponent } from './crv.component';

describe('CrvComponent', () => {
  let component: CrvComponent;
  let fixture: ComponentFixture<CrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
