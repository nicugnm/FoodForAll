import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Search, SearchFailure, SearchSuccess} from './restaurant.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProductCategory, RestaurantResponse, RestaurantsService} from "./restaurants.service";
import {SortingType} from "./restaurant.reducers";

@Injectable()
export class HomepageEffects {
  search = createEffect(() => this.actions.pipe(
    ofType(Search),
    switchMap(action => this.restaurantService.search(action.searchKeyword, action.page, action.sortingType, action.productCategory).pipe(
      map(result => SearchSuccess({ restaurants: result.restaurants, sortingType: result.sortingType, page: result.page, productCategory: result.productCategory, totalPages: result.totalPages
      })),
      catchError((err) => {
        return of(SearchFailure({restaurants: new Array<RestaurantResponse>(), page: 0, productCategory: ProductCategory.ALL, sortingType: SortingType.ASC, totalPages: 0}));
      })
    ))
  ));

  constructor(
    private actions: Actions,
    private restaurantService: RestaurantsService
  ) {}
}
