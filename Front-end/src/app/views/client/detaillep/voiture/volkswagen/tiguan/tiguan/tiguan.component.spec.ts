import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiguanComponent } from './tiguan.component';

describe('TiguanComponent', () => {
  let component: TiguanComponent;
  let fixture: ComponentFixture<TiguanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiguanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiguanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
