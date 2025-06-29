import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientLayoutComponent } from './client-layout.component';

describe('ClientLayoutComponent', () => {
  let component: ClientLayoutComponent;
  let fixture: ComponentFixture<ClientLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
