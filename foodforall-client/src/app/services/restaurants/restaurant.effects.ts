import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
   Search, SearchSuccess, SearchFailure
} from './restaurant.actions';
import {exhaustMap, of} from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {RestaurantResponse, RestaurantsService} from "./restaurants.service";

@Injectable()
export class Homepageffects {
  search = createEffect(() => this.actions.pipe(
    ofType(Search),
    switchMap(action => this.restaurantService.search(action.searchKeyword).pipe(
      map(response => SearchSuccess({ response: response })),
      catchError((err, caught) => {
        return of(SearchFailure({response: new Array<RestaurantResponse>()}));
      })
    ))
  ));

  constructor(
    private actions: Actions,
    private restaurantService: RestaurantsService
  ) {}
}
