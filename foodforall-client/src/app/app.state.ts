import {authReducer, AuthState} from "./services/auth/auth.reducers";

export interface AppState {
  auth: AuthState;
}

export const reducers = {
  auth: authReducer,
};
