import {Search, SearchFailure, SearchSuccess} from "./restaurant.actions";
import {createReducer, on} from "@ngrx/store";
import {ProductCategory, RestaurantResponse} from "./restaurants.service";

export enum SortingType {
  ASC,
  DESC
}


export interface SearchState {
  searchItems: Array<RestaurantResponse>
  sortingType: SortingType,
  page: number,
  productCategory: ProductCategory,
  totalPages: number
}

export const initialState: SearchState = {
  searchItems: new Array<RestaurantResponse>(),
  page: 1,
  sortingType: SortingType.ASC,
  productCategory: ProductCategory.ALL,
  totalPages: 0
};


export const searchReducer = createReducer(
  initialState,
  on(SearchSuccess, (state, { restaurants, page, productCategory, sortingType, totalPages }) => ({
    ...state,
    searchItems: restaurants,
    page: page,
    productCategory: productCategory,
    sortingType: sortingType,
    totalPages: totalPages
  })),
  on(Search, SearchFailure, state => ({
    ...state
  }))
);
