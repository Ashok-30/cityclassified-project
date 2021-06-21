import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassifiedsComponent } from './delete-classifieds.component';

describe('DeleteClassifiedsComponent', () => {
  let component: DeleteClassifiedsComponent;
  let fixture: ComponentFixture<DeleteClassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
