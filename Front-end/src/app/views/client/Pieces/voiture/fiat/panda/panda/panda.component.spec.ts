import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaComponent } from './panda.component';

describe('PandaComponent', () => {
  let component: PandaComponent;
  let fixture: ComponentFixture<PandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
