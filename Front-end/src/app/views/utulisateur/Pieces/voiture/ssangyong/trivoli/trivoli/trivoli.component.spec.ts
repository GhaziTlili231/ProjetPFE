import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrivoliComponent } from './trivoli.component';

describe('TrivoliComponent', () => {
  let component: TrivoliComponent;
  let fixture: ComponentFixture<TrivoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrivoliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrivoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
