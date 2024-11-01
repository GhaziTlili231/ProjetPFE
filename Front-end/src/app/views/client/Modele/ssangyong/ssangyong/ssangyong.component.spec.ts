import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsangyongComponent } from './ssangyong.component';

describe('SsangyongComponent', () => {
  let component: SsangyongComponent;
  let fixture: ComponentFixture<SsangyongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsangyongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsangyongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
