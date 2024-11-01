import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliodynamqueComponent } from './cliodynamque.component';

describe('CliodynamqueComponent', () => {
  let component: CliodynamqueComponent;
  let fixture: ComponentFixture<CliodynamqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliodynamqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliodynamqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
