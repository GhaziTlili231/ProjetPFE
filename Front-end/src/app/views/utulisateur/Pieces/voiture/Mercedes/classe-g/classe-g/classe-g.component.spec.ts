import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseGComponent } from './classe-g.component';

describe('ClasseGComponent', () => {
  let component: ClasseGComponent;
  let fixture: ComponentFixture<ClasseGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasseGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasseGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
