import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginutulisateurComponent } from './loginutulisateur.component';

describe('LoginutulisateurComponent', () => {
  let component: LoginutulisateurComponent;
  let fixture: ComponentFixture<LoginutulisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginutulisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginutulisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
