import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from './auth.service';
import {
  AuthActionTypes,
  LogIn,
  LogInSuccess,
  LogInFailure,
  Register,
  RegisterSuccess, RegisterFailure, LogOut
} from './auth.actions';
import {exhaustMap, of} from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  register = createEffect(() => this.actions.pipe(
    ofType(Register),
    switchMap(action => this.authService.register(action.username, action.email, action.password, action.confirmPassword).pipe(
      map(response => RegisterSuccess({ status: response.status, message: response.message, errorDetails: response.errorDetails })),
      catchError((err) => {
        return of(RegisterFailure({message: "", status: err, errorDetails: err}));
      })
    ))
  ));

  logIn = createEffect(() => this.actions.pipe(
    ofType(LogIn),
    switchMap(action => this.authService.logIn(action.username, action.password).pipe(
      map(response => LogInSuccess({ token: response.token, userId: response.userId, expiration: response.expiration })),
      catchError(error => of(LogInFailure({ error })))
    ))
  ));

  logOut = createEffect(() => this.actions.pipe(
    ofType(LogOut),
    tap(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiration');
      this.router.navigateByUrl('/');
    })
  ), { dispatch: false });

  logInSuccess = createEffect(() => this.actions.pipe(
    ofType(LogInSuccess),
    tap(action => {
      localStorage.setItem('token', action.token);
      localStorage.setItem('userId', action.userId);
      localStorage.setItem('expiration', action.expiration);
      this.router.navigateByUrl('/');
    })
  ), { dispatch: false });

  successRegister = createEffect(() => this.actions.pipe(
    ofType(RegisterSuccess),
    tap(() => {
      this.router.navigateByUrl('/login');
    })
  ), { dispatch: false });

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
