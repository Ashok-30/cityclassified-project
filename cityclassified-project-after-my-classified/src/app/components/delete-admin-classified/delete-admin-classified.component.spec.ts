import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdminClassifiedComponent } from './delete-admin-classified.component';

describe('DeleteAdminClassifiedComponent', () => {
  let component: DeleteAdminClassifiedComponent;
  let fixture: ComponentFixture<DeleteAdminClassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAdminClassifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdminClassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
