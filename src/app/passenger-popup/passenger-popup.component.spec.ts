import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerPopupComponent } from './passenger-popup.component';

describe('PassengerPopupComponent', () => {
  let component: PassengerPopupComponent;
  let fixture: ComponentFixture<PassengerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
