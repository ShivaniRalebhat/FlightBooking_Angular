import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAirlineComponent } from './list-airline.component';

describe('ListAirlineComponent', () => {
  let component: ListAirlineComponent;
  let fixture: ComponentFixture<ListAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
