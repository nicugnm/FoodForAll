import {
  LogIn,
  LogInFailure,
  LogInSuccess, LogOut, Register,
  RegisterFailure,
  RegisterSuccess
} from "./auth.actions";
import {createReducer, createSelector, on} from "@ngrx/store";
import {AppState} from "../../app.state";

export interface AuthState {
  isLoggedIn: boolean,
  token: string | null;
  userId: string | null;
  expirationDate: string | null;
  error: any | null;
  loading: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  userId: null,
  expirationDate: null,
  error: null,
  loading: false
};

export const authReducer = createReducer(
  initialState,
  on(LogInSuccess, (state, { token, userId, expiration }) => ({
    ...state,
    token,
    isLoggedIn: true,
    userId: userId,
    expirationDate: expiration,
    error: null,
    loading: false
  })),
  on(LogInFailure, RegisterFailure, (state, {  }) => ({
    ...state,
    loading: false
  })),
  on(LogIn, Register, state => ({
    ...state,
    error: null,
    loading: true
  })),
  on(LogOut, state => ({
    ...initialState
  }))
);
