import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmaxComponent } from './tmax.component';

describe('TmaxComponent', () => {
  let component: TmaxComponent;
  let fixture: ComponentFixture<TmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
