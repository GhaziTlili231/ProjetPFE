import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorentoComponent } from './sorento.component';

describe('SorentoComponent', () => {
  let component: SorentoComponent;
  let fixture: ComponentFixture<SorentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
