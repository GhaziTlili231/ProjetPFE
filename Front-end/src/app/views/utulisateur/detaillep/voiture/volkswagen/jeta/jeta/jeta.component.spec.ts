import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetaComponent } from './jeta.component';

describe('JetaComponent', () => {
  let component: JetaComponent;
  let fixture: ComponentFixture<JetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
