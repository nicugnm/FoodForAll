import { Injectable } from '@angular/core';
import {TagType} from "../../components/restaurants-addon-tags/restaurants-addon-tags.component";

@Injectable({
  providedIn: 'root'
})
export class SheltersService {

  private _shelters: Array<SheltersResponse> = new Array<SheltersResponse>()

  public get shelters() {
    return this._shelters;
  }

  public set shelters(restaurants: Array<SheltersResponse>) {
    this._shelters = restaurants;
  }

  constructor() {
    this._shelters = [new class implements SheltersResponse {
      closeHour: number = 22;
      closeMinute: number = 30;
      description: string = "Parohia Bucuresti Description";
      id: string = "1";
      name: string = "Parohia Bucuresti";
      tagsType: Array<TagType> = Array(TagType.EcoFriendly, TagType.MostReviewed);
      openDates: Array<1 | 2 | 3 | 4 | 5 | 6 | 7> = Array(1, 2, 3, 4, 5, 6, 7);
      products: Array<Product> = [new class implements Product {
        description: string = "Product 1 description";
        enabled: boolean = true;
        id: string = "1";
        name: string = "Product 1";
        quantityAvailable: number = 2;
      },
        new class implements Product {
          description?: string;
          enabled: boolean = true;
          id: string = "2";
          name: string = "Product 2";
          quantityAvailable: number = 0;
        }
        ,
        new class implements Product {
          description?: string;
          enabled: boolean = false;
          id: string = "3";
          name: string = "Product 3";
          quantityAvailable: number = 2;
        }
      ]
    },
      new class implements SheltersResponse {
        closeHour: number = 22;
        closeMinute: number = 30;
        description: string = "Asociatia Crucea Rosie Description";
        id: string = "2";
        name: string = "Asociatia Crucea Rosie";
        tagsType: Array<TagType> = Array(TagType.MostWanted, TagType.MostReviewed);
        openDates: Array<1 | 2 | 3 | 4 | 5 | 6 | 7> = Array(1, 2, 3, 4, 5, 6, 7);
        products: Array<Product> = [new class implements Product {
          description: string = "Shelter 1 description";
          enabled: boolean = true;
          id: string = "1";
          name: string = "Product 1";
          quantityAvailable: number = 2;
        },
          new class implements Product {
            description?: string;
            enabled: boolean = true;
            id: string = "2";
            name: string = "Product 2";
            quantityAvailable: number = 0;
          }
          ,
          new class implements Product {
            description?: string;
            enabled: boolean = false;
            id: string = "3";
            name: string = "Product 3";
            quantityAvailable: number = 2;
          }
        ]
      }
    ];
  }

}

export interface SheltersResponse {
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
  quantityAvailable: number,
  enabled: boolean
}
