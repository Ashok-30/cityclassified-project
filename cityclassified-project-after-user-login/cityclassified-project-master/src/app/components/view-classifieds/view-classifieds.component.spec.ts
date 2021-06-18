import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassifiedsComponent } from './view-classifieds.component';

describe('ViewClassifiedsComponent', () => {
  let component: ViewClassifiedsComponent;
  let fixture: ComponentFixture<ViewClassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
