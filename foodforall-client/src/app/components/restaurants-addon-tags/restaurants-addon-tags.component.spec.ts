import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsAddonTagsComponent } from './restaurants-addon-tags.component';

describe('RestaurantsAddonTagsComponent', () => {
  let component: RestaurantsAddonTagsComponent;
  let fixture: ComponentFixture<RestaurantsAddonTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantsAddonTagsComponent]
    });
    fixture = TestBed.createComponent(RestaurantsAddonTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
