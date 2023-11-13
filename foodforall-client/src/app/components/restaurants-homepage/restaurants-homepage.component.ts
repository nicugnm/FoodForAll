import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants/restaurants.service";
@Component({
  selector: 'app-restaurants-homepage',
  templateUrl: './restaurants-homepage.component.html',
  styleUrls: ['./restaurants-homepage.component.css']
})
export class RestaurantsHomepageComponent {

  constructor(protected restaurantService: RestaurantsService) {}
}
