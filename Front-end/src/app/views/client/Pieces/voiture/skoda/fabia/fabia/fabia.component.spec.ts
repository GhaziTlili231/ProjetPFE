import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabiaComponent } from './fabia.component';

describe('FabiaComponent', () => {
  let component: FabiaComponent;
  let fixture: ComponentFixture<FabiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
