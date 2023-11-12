import { Component } from '@angular/core';
import {TagType} from "../restaurants-addon-tags/restaurants-addon-tags.component";
import {RestaurantsService} from "../../services/restaurants/restaurants.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  protected readonly TagType = TagType;

  protected readonly restaurantService: RestaurantsService;

  constructor(restaurantService: RestaurantsService) {
    this.restaurantService = restaurantService;
  }
}
