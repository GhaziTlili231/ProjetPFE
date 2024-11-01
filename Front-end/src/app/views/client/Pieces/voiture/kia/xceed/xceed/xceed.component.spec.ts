import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XceedComponent } from './xceed.component';

describe('XceedComponent', () => {
  let component: XceedComponent;
  let fixture: ComponentFixture<XceedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XceedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
