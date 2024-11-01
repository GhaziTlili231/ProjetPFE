import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachatComponent } from './tachat.component';

describe('TachatComponent', () => {
  let component: TachatComponent;
  let fixture: ComponentFixture<TachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
