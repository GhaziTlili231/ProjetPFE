import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuiladminComponent } from './acceuiladmin.component';

describe('AcceuiladminComponent', () => {
  let component: AcceuiladminComponent;
  let fixture: ComponentFixture<AcceuiladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuiladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuiladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
