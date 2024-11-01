import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtulisateurLayoutComponent } from './utulisateur-layout.component';

describe('UtulisateurLayoutComponent', () => {
  let component: UtulisateurLayoutComponent;
  let fixture: ComponentFixture<UtulisateurLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtulisateurLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtulisateurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
