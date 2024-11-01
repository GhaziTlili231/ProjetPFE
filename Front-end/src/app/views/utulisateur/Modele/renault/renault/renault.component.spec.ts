import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenaultComponent } from './renault.component';

describe('RenaultComponent', () => {
  let component: RenaultComponent;
  let fixture: ComponentFixture<RenaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
