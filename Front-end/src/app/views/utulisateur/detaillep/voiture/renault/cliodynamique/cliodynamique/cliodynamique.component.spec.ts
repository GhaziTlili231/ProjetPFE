import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliodynamiqueComponent } from './cliodynamique.component';

describe('CliodynamiqueComponent', () => {
  let component: CliodynamiqueComponent;
  let fixture: ComponentFixture<CliodynamiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliodynamiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliodynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
