import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorandoComponent } from './korando.component';

describe('KorandoComponent', () => {
  let component: KorandoComponent;
  let fixture: ComponentFixture<KorandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorandoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
