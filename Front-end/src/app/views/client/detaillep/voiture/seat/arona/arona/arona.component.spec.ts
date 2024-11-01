import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AronaComponent } from './arona.component';

describe('AronaComponent', () => {
  let component: AronaComponent;
  let fixture: ComponentFixture<AronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
