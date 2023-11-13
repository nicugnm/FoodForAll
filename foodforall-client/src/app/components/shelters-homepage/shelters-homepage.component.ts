import { Component } from '@angular/core';
import {Carousel, initTE} from "tw-elements";
import {SheltersService} from "../../services/shelters/shelters.service";
import {TailwindElements} from "../../hacks";

@Component({
  selector: 'app-shelters-homepage',
  templateUrl: './shelters-homepage.component.html',
  styleUrls: ['./shelters-homepage.component.css']
})
@TailwindElements()
export class SheltersHomepageComponent {
  protected readonly sheltersService: SheltersService;

  constructor(sheltersService: SheltersService) {
    this.sheltersService = sheltersService;
  }

  ngOnInit(): void {
    initTE({ Carousel });
  }
}
