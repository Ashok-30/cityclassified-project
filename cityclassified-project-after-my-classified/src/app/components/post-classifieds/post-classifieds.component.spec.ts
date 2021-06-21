import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClassifiedsComponent } from './post-classifieds.component';

describe('PostClassifiedsComponent', () => {
  let component: PostClassifiedsComponent;
  let fixture: ComponentFixture<PostClassifiedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostClassifiedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClassifiedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
