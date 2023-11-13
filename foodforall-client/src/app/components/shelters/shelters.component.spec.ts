import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersComponent } from './shelters.component';

describe('SheltersComponent', () => {
  let component: SheltersComponent;
  let fixture: ComponentFixture<SheltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheltersComponent]
    });
    fixture = TestBed.createComponent(SheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
