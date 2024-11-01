import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AygoComponent } from './aygo.component';

describe('AygoComponent', () => {
  let component: AygoComponent;
  let fixture: ComponentFixture<AygoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AygoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AygoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
