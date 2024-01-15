import {createAction, props} from "@ngrx/store";


export const AuthActionTypes = {
  REGISTER: '[Auth] Register',
  REGISTER_SUCCESS: '[Auth] Register Success',
  REGISTER_FAILURE: '[Auth] Register Failure',
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAILURE: '[Auth] Login Failure',
  LOGOUT: '[Auth] LogOut'
};

export const Register = createAction(
  AuthActionTypes.REGISTER,
  props<{
    username: string | null | undefined;
    email: string | null | undefined;
    password: string | null | undefined;
    confirmPassword: string | null | undefined
  }>()
);

export const RegisterSuccess = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ status: string; message: string; errorDetails: string }>()
);

export const RegisterFailure = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ status: string; message: string; errorDetails: string }>()
);

export const LogIn = createAction(
  AuthActionTypes.LOGIN,
  props<{
    username: string | null | undefined;
    password: string | null | undefined
  }>()
);

export const LogOut = createAction(
  AuthActionTypes.LOGOUT
);

export const LogInSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ token: string; userId: string; expiration: string }>()
);

export const LogInFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: any }>()
);
