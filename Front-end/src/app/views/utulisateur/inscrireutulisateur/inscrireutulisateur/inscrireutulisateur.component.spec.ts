import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireutulisateurComponent } from './inscrireutulisateur.component';

describe('InscrireutulisateurComponent', () => {
  let component: InscrireutulisateurComponent;
  let fixture: ComponentFixture<InscrireutulisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrireutulisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrireutulisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
