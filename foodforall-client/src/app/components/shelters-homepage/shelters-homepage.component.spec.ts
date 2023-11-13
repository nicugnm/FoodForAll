import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersHomepageComponent } from './shelters-homepage.component';

describe('SheltersHomepageComponent', () => {
  let component: SheltersHomepageComponent;
  let fixture: ComponentFixture<SheltersHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheltersHomepageComponent]
    });
    fixture = TestBed.createComponent(SheltersHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
