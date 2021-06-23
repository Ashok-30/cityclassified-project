import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassifiedsComponent } from './myclassifieds.component';

describe('MyclassifiedsComponent', () => {
  let component: MyclassifiedsComponent;
  let fixture: ComponentFixture<MyclassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
