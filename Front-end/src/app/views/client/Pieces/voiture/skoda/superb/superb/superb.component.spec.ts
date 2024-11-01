import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperbComponent } from './superb.component';

describe('SuperbComponent', () => {
  let component: SuperbComponent;
  let fixture: ComponentFixture<SuperbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
