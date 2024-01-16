import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {Register} from "../../services/auth/auth.actions";
import {Search} from "../../services/restaurants/restaurant.actions";
import {selectIsLoggedIn} from "../../services/auth/auth.selectors";
import {selectSearchResponse} from "../../services/restaurants/restaurant.selectors";
import {AppState} from "../../app.state";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  searchResponse$ = this.store.select(selectSearchResponse);

  constructor(private store: Store<AppState>) {
    this.store = store;
  }

  protected onSearch(keywordsInput: string) {
    this.store.dispatch(
      Search({
        searchKeyword: keywordsInput
      })
    );
    //this.router.navigate([`/search-elements/${keywordsInput}`]);
  }
}
