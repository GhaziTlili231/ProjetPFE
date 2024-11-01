import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliocampusComponent } from './cliocampus.component';

describe('CliocampusComponent', () => {
  let component: CliocampusComponent;
  let fixture: ComponentFixture<CliocampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliocampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliocampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
