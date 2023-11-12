import {Injectable} from '@angular/core';
import {TagType} from "../../components/restaurants-addon-tags/restaurants-addon-tags.component";

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

  constructor() {
    this._restaurants = [new class implements RestaurantResponse {
      closeHour: number = 22;
      closeMinute: number = 30;
      description: string = "Mc Donalds Description";
      id: string = "1";
      name: string = "McDonalds";
      tagsType: Array<TagType> = Array(TagType.EcoFriendly, TagType.MostReviewed);
      openDates: Array<1 | 2 | 3 | 4 | 5 | 6 | 7> = Array(1, 2, 3, 4, 5, 6, 7);
      products: Array<Product> = [new class implements Product {
        description: string = "Product 1 description";
        enabled: boolean = true;
        id: string = "1";
        name: string = "Product 1";
        price: number = 30.53;
        quantityAvailable: number = 2;
      },
        new class implements Product {
          description?: string;
          enabled: boolean = true;
          id: string = "2";
          name: string = "Product 2";
          price: number = 15.53;
          quantityAvailable: number = 0;
        }
        ,
        new class implements Product {
          description?: string;
          enabled: boolean = false;
          id: string = "3";
          name: string = "Product 3";
          price: number = 15.53;
          quantityAvailable: number = 2;
        }
      ]
    },
      new class implements RestaurantResponse {
        closeHour: number = 22;
        closeMinute: number = 30;
        description: string = "KFC Description";
        id: string = "2";
        name: string = "KFC";
        tagsType: Array<TagType> = Array(TagType.MostWanted, TagType.MostReviewed);
        openDates: Array<1 | 2 | 3 | 4 | 5 | 6 | 7> = Array(1, 2, 3, 4, 5, 6, 7);
        products: Array<Product> = [new class implements Product {
          description: string = "Product 1 description";
          enabled: boolean = true;
          id: string = "1";
          name: string = "Product 1";
          price: number = 30.53;
          quantityAvailable: number = 2;
        },
          new class implements Product {
            description?: string;
            enabled: boolean = true;
            id: string = "2";
            name: string = "Product 2";
            price: number = 15.53;
            quantityAvailable: number = 0;
          }
          ,
          new class implements Product {
            description?: string;
            enabled: boolean = false;
            id: string = "3";
            name: string = "Product 3";
            price: number = 15.53;
            quantityAvailable: number = 2;
          }
        ]
      }
    ];
  }

}

export interface RestaurantResponse {
  id: string,
  name: string,
  description?: string,
  closeHour: number,
  closeMinute: number,
  openDates: Array<1 | 2 | 3 | 4 | 5 | 6 | 7>
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
