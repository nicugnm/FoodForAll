import {authReducer, AuthState} from "./services/auth/auth.reducers";
import {searchReducer, SearchState} from "./services/restaurants/restaurant.reducers";

export interface AppState {
  auth: AuthState;
  search: SearchState;
}

export const reducers = {
  auth: authReducer,
  search: searchReducer,
};
