import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClassifiedsAdminComponent } from './post-classifieds-admin.component';

describe('PostClassifiedsAdminComponent', () => {
  let component: PostClassifiedsAdminComponent;
  let fixture: ComponentFixture<PostClassifiedsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostClassifiedsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClassifiedsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
