import {
  SearchSuccess

} from "./restaurant.actions";
import {createReducer, createSelector, on, State} from "@ngrx/store";
import {AppState} from "../../app.state";
import {RestaurantResponse} from "./restaurants.service";
import {Observable} from "rxjs";

export interface SearchState {
  searchItems: Array<RestaurantResponse>
}

export const initialState: SearchState = {
  searchItems: new Array<RestaurantResponse>()
};

export const searchReducer = createReducer(
  initialState,
  on(SearchSuccess, (state, { response }) => ({
    ...state,
    searchItems: response
  }))
);
