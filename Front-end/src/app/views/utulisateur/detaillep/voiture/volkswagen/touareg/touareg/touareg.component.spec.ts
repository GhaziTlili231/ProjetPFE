import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouaregComponent } from './touareg.component';

describe('TouaregComponent', () => {
  let component: TouaregComponent;
  let fixture: ComponentFixture<TouaregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouaregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouaregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
