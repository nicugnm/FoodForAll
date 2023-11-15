import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants/restaurants.service";
import {initTE, Carousel} from "tw-elements";


@Component({
  selector: 'app-restaurants-homepage',
  templateUrl: './restaurants-homepage.component.html',
  styleUrls: ['./restaurants-homepage.component.css']
})
export class RestaurantsHomepageComponent implements OnInit {
  protected readonly restaurantService: RestaurantsService;

  constructor(restaurantService: RestaurantsService) {
    this.restaurantService = restaurantService;
  }

  ngOnInit(): void {
    initTE({ Carousel });
  }
}
