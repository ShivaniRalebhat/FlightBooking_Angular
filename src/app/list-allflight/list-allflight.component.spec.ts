import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllflightComponent } from './list-allflight.component';

describe('ListAllflightComponent', () => {
  let component: ListAllflightComponent;
  let fixture: ComponentFixture<ListAllflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
