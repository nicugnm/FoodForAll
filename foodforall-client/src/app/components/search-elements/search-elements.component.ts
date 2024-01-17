import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.state";
import {selectSearchResponse, selectTotalPages} from "../../services/restaurants/restaurant.selectors";
import {RestaurantResponse} from "../../services/restaurants/restaurants.service";
import {Search} from "../../services/restaurants/restaurant.actions";
import {searchBarKeyword} from "../search-bar/search-bar.component";
import {SortingType} from "../../services/restaurants/restaurant.reducers";

@Component({
  selector: 'app-search-elements',
  templateUrl: './search-elements.component.html',
  styleUrls: ['./search-elements.component.css']
})
export class SearchElementsComponent {

  searchResponse$ = this.store.select(selectSearchResponse);
  totalPages$ = this.store.select(selectTotalPages);

  sortingType: SortingType = SortingType.ASC
  currentPage: number = 1;
  totalPages: number = 0;

  protected readonly FoodCategory = FoodCategory;

  protected prCategory = 3;

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.triggerSearch();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.triggerSearch();
    }
  }

  triggerSearch() {
    // Dispatch a Search action with updated parameters
    this.store.dispatch(Search({
      searchKeyword: searchBarKeyword,
      page: this.currentPage,
      sortingType: this.sortingType,
      productCategory: this.prCategory
    }));
  }

  updateCategory(category: string) {
    if (category == "Fastfood") this.prCategory = 0;
    else if (category == "Pui") this.prCategory = 1;
    else if (category == "Vita") this.prCategory = 2;
    else this.prCategory = 3;
    this.triggerSearch();
  }

  hasProductsInCategory(restaurant: RestaurantResponse): boolean {
    return restaurant.products.some(product =>
      this.prCategory === 3 || product.productCategory.valueOf() === this.prCategory);
  }

  constructor(private store: Store<AppState>) {
    this.totalPages$.subscribe(response => {
      if (response > 0) {
        this.totalPages = response;
      }
    });
  }
}

export const FoodCategory = ["Toate", "Fastfood", "Pui", "Vita"];
