import {Component, OnInit} from '@angular/core';
import {Carousel, initTE} from "tw-elements";
import {SheltersService} from "../../services/shelters/shelters.service";

@Component({
  selector: 'app-shelters-homepage',
  templateUrl: './shelters-homepage.component.html',
  styleUrls: ['./shelters-homepage.component.css']
})
export class SheltersHomepageComponent implements OnInit {
  protected readonly sheltersService: SheltersService;

  constructor(sheltersService: SheltersService) {
    this.sheltersService = sheltersService;
  }

  ngOnInit(): void {
    initTE({ Carousel });
  }
}
