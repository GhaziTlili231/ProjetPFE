import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MussoComponent } from './musso.component';

describe('MussoComponent', () => {
  let component: MussoComponent;
  let fixture: ComponentFixture<MussoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MussoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MussoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
