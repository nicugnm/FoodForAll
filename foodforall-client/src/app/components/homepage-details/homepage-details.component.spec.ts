import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDetailsComponent } from './homepage-details.component';

describe('HomepageDetailsComponent', () => {
  let component: HomepageDetailsComponent;
  let fixture: ComponentFixture<HomepageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageDetailsComponent]
    });
    fixture = TestBed.createComponent(HomepageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
