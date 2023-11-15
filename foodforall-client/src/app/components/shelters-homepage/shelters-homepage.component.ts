import {Component} from '@angular/core';
import {SheltersService} from "../../services/shelters/shelters.service";

@Component({
  selector: 'app-shelters-homepage',
  templateUrl: './shelters-homepage.component.html',
  styleUrls: ['./shelters-homepage.component.css']
})
export class SheltersHomepageComponent {
  constructor(protected sheltersService: SheltersService) {
  }
}
