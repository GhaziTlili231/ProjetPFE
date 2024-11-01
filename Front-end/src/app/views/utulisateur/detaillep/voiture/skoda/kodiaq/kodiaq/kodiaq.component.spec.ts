import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodiaqComponent } from './kodiaq.component';

describe('KodiaqComponent', () => {
  let component: KodiaqComponent;
  let fixture: ComponentFixture<KodiaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodiaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodiaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
