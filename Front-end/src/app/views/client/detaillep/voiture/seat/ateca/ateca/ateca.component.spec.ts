import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtecaComponent } from './ateca.component';

describe('AtecaComponent', () => {
  let component: AtecaComponent;
  let fixture: ComponentFixture<AtecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
