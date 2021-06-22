import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCityDetailsComponent } from './delete-city-details.component';

describe('DeleteCityDetailsComponent', () => {
  let component: DeleteCityDetailsComponent;
  let fixture: ComponentFixture<DeleteCityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
