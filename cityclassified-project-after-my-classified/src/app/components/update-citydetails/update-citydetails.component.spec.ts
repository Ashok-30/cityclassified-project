import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCitydetailsComponent } from './update-citydetails.component';

describe('UpdateCitydetailsComponent', () => {
  let component: UpdateCitydetailsComponent;
  let fixture: ComponentFixture<UpdateCitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCitydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
