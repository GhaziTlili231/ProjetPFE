import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiorinoComponent } from './fiorino.component';

describe('FiorinoComponent', () => {
  let component: FiorinoComponent;
  let fixture: ComponentFixture<FiorinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiorinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiorinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
