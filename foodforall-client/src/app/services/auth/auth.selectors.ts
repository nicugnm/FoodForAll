import {AppState} from "../../app.state";
import {createSelector} from "@ngrx/store";

export const selectAuthState = (state: AppState) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (auth) => auth.isLoggedIn
);
