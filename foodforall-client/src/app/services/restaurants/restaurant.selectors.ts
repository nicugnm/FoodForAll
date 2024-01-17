import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";

export const selectSearchState = (state: AppState) => state.search;

export const selectSearchResponse = createSelector(
  selectSearchState,
  (search) => search.searchItems
);

export const selectTotalPages = createSelector(
  selectSearchState,
  (search) => search.totalPages
);
