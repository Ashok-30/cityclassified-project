import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitydetailsComponent } from './add-citydetails.component';

describe('AddCitydetailsComponent', () => {
  let component: AddCitydetailsComponent;
  let fixture: ComponentFixture<AddCitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
