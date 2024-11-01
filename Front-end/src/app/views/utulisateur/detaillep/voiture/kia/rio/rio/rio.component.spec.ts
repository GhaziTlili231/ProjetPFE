import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RioComponent } from './rio.component';

describe('RioComponent', () => {
  let component: RioComponent;
  let fixture: ComponentFixture<RioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
