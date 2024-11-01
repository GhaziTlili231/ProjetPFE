import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChrComponent } from './chr.component';

describe('ChrComponent', () => {
  let component: ChrComponent;
  let fixture: ComponentFixture<ChrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
