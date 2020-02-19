import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalObjectsComponent } from './rental-objects.component';

describe('RentalObjectsComponent', () => {
  let component: RentalObjectsComponent;
  let fixture: ComponentFixture<RentalObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
