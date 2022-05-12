import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarBaruserComponent } from './nar-baruser.component';

describe('NarBaruserComponent', () => {
  let component: NarBaruserComponent;
  let fixture: ComponentFixture<NarBaruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarBaruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarBaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
