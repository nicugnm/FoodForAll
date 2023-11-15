import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchElementsComponent } from './search-elements.component';

describe('SearchElementsComponent', () => {
  let component: SearchElementsComponent;
  let fixture: ComponentFixture<SearchElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchElementsComponent]
    });
    fixture = TestBed.createComponent(SearchElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
