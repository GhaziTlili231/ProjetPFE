import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintComponent } from './admint.component';

describe('AdmintComponent', () => {
  let component: AdmintComponent;
  let fixture: ComponentFixture<AdmintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
