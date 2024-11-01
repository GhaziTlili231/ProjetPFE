import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KushaqComponent } from './kushaq.component';

describe('KushaqComponent', () => {
  let component: KushaqComponent;
  let fixture: ComponentFixture<KushaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KushaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KushaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
