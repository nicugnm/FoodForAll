import { Component } from '@angular/core';
import {RestaurantsService} from "../../services/restaurants/restaurants.service";
import {TagType} from "../restaurants-addon-tags/restaurants-addon-tags.component";

@Component({
  selector: 'app-restaurants-homepage',
  templateUrl: './restaurants-homepage.component.html',
  styleUrls: ['./restaurants-homepage.component.css']
})
export class RestaurantsHomepageComponent {
  protected readonly TagType = TagType;

  protected readonly restaurantService: RestaurantsService;

  constructor(restaurantService: RestaurantsService) {
    this.restaurantService = restaurantService;
  }
}