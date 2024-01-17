import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Search} from "../../services/restaurants/restaurant.actions";
import {SortingType} from "../../services/restaurants/restaurant.reducers";
import {ProductCategory} from "../../services/restaurants/restaurants.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private store: Store,
              private router: Router) {
    this.store = store;
  }

  onSearch(keywordsInput: string) {
    searchBarKeyword = keywordsInput;
    this.store.dispatch(
      Search({
        searchKeyword: keywordsInput,
        sortingType: SortingType.ASC,
        productCategory: ProductCategory.ALL,
        page: 0
      })
    );
    this.router.navigate([`/search-elements/${keywordsInput}`]);
  }
}

export let searchBarKeyword = "";
