import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlcComponent } from './glc.component';

describe('GlcComponent', () => {
  let component: GlcComponent;
  let fixture: ComponentFixture<GlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
