import {createAction, props} from "@ngrx/store";
import {RestaurantResponse} from "./restaurants.service";
import {Observable} from "rxjs";


export const HomepageActionTypes = {
  SEARCH: '[Homepage] Search',
  SEARCH_SUCCESS: '[Homepage] Search Success',
  SEARCH_FAILURE: '[Homepage] Search Failure'
};

export const Search = createAction(
  HomepageActionTypes.SEARCH,
  props<{
    searchKeyword: string | null | undefined;
  }>()
);

export const SearchSuccess = createAction(
  HomepageActionTypes.SEARCH_SUCCESS,
  props<{ response: Array<RestaurantResponse> }>()
);

export const SearchFailure = createAction(
  HomepageActionTypes.SEARCH_FAILURE,
  props<{ response: Array<RestaurantResponse> }>()
);
