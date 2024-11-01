import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesLayoutComponent } from './pieces-layout.component';

describe('PiecesLayoutComponent', () => {
  let component: PiecesLayoutComponent;
  let fixture: ComponentFixture<PiecesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
