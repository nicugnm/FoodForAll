import {Injectable} from '@angular/core';
import {TagType} from "../../components/restaurants-addon-tags/restaurants-addon-tags.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SortingType} from "./restaurant.reducers";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private homepageSearch = 'http://localhost:5174/api/restaurant/search';

  constructor(private http: HttpClient) {}

  search(searchKeyword: string | null | undefined,
         page: number | null | undefined,
         sortingType: SortingType | null | undefined,
         productCategory: ProductCategory | null | undefined): Observable<any> {
    return this.http.post(this.homepageSearch, { searchKeyword, page, sortingType, productCategory });
  }
}

export interface RestaurantResponse {
  id: string,
  name: string,
  description?: string,
  closeHour: Date,
  openDates: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>
  products: Array<Product>,
  tagsType: Array<TagType>,
}

export interface Product {
  id: string,
  name: string,
  description?: string,
  price: number,
  quantityAvailable: number,
  enabled: boolean,
  productCategory: ProductCategory,
  isPopular: boolean
}

export enum ProductCategory {
  FAST_FOOD,
  PUI,
  VITA,
  ALL
}
