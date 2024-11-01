import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassegComponent } from './classeg.component';

describe('ClassegComponent', () => {
  let component: ClassegComponent;
  let fixture: ComponentFixture<ClassegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
