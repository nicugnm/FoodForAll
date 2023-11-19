import {Injectable} from '@angular/core';
import {TagType} from "../../components/restaurants-addon-tags/restaurants-addon-tags.component";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private _restaurants: Array<RestaurantResponse> = new Array<RestaurantResponse>()

  public get restaurants() {
    return this._restaurants;
  }

  public set restaurants(restaurants: Array<RestaurantResponse>) {
    this._restaurants = restaurants;
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Array<RestaurantResponse>>("http://localhost:5174/Restaurant").subscribe(response => {
        this._restaurants = response;
      });
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
