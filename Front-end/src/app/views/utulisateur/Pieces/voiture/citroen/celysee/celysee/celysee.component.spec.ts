import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelyseeComponent } from './celysee.component';

describe('CelyseeComponent', () => {
  let component: CelyseeComponent;
  let fixture: ComponentFixture<CelyseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelyseeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelyseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
