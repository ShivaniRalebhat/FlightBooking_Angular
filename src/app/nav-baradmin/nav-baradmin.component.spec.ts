import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBaradminComponent } from './nav-baradmin.component';

describe('NavBaradminComponent', () => {
  let component: NavBaradminComponent;
  let fixture: ComponentFixture<NavBaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBaradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
