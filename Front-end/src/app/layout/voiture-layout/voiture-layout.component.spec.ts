import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureLayoutComponent } from './voiture-layout.component';

describe('VoitureLayoutComponent', () => {
  let component: VoitureLayoutComponent;
  let fixture: ComponentFixture<VoitureLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
