import {Injectable} from '@angular/core';
import {TagType} from "../../components/restaurants-addon-tags/restaurants-addon-tags.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private homepageSearch = 'http://localhost:5174/api/restaurant/search';

  // private _restaurants: Array<RestaurantResponse> = new Array<RestaurantResponse>()

  // public get restaurants() {
  //   return this._restaurants;
  // }
  //
  // public set restaurants(restaurants: Array<RestaurantResponse>) {
  //   this._restaurants = restaurants;
  // }

  constructor(private http: HttpClient) {
    // this.http.get<Array<RestaurantResponse>>("http://localhost:5174/Restaurant").subscribe(response => {
    //     this._restaurants = response;
    //   });
  }

  search(searchKeyword: string | null | undefined): Observable<any> {
    return this.http.post(this.homepageSearch, { searchKeyword });
  }
}

export interface RestaurantResponse {
  id: string,
  name: string,
  description?: string,
  closeHour: Date,
  openDates: Array<0 | 1 | 2 | 3 | 4 | 5 | 6>
  products: Array<Product>,
  tagsType: Array<TagType>
}

export interface Product {
  id: string,
  name: string,
  description?: string,
  price: number,
  quantityAvailable: number,
  enabled: boolean
}
