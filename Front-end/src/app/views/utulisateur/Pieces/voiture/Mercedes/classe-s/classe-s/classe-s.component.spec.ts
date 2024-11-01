import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseSComponent } from './classe-s.component';

describe('ClasseSComponent', () => {
  let component: ClasseSComponent;
  let fixture: ComponentFixture<ClasseSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
