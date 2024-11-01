import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RextonComponent } from './rexton.component';

describe('RextonComponent', () => {
  let component: RextonComponent;
  let fixture: ComponentFixture<RextonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RextonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RextonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
