import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonComponent } from './leon.component';

describe('LeonComponent', () => {
  let component: LeonComponent;
  let fixture: ComponentFixture<LeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
