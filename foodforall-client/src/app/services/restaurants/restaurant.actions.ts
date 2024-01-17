import {createAction, props} from "@ngrx/store";
import {ProductCategory, RestaurantResponse} from "./restaurants.service";
import {Observable} from "rxjs";
import {SortingType} from "./restaurant.reducers";


export const HomepageActionTypes = {
  SEARCH: '[Homepage] Search',
  SEARCH_SUCCESS: '[Homepage] Search Success',
  SEARCH_FAILURE: '[Homepage] Search Failure'
};

export const Search = createAction(
  HomepageActionTypes.SEARCH,
  props<{
    searchKeyword: string | null | undefined;
    page: number | null | undefined;
    sortingType: SortingType | null | undefined;
    productCategory: ProductCategory | null | undefined;
  }>()
);

export const SearchSuccess = createAction(
  HomepageActionTypes.SEARCH_SUCCESS,
  props<{ restaurants: Array<RestaurantResponse>, sortingType: SortingType, page: number, productCategory: ProductCategory,
  totalPages: number }>()
);

export const SearchFailure = createAction(
  HomepageActionTypes.SEARCH_FAILURE,
  props<{ restaurants: Array<RestaurantResponse>, sortingType: SortingType, page: number, productCategory: ProductCategory,
  totalPages: number }>()
);
