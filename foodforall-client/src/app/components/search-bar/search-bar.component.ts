import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private router: Router) { }

  protected onSearch(keywordsInput: string) {
    console.log("navigate:" + keywordsInput)
    this.router.navigate([`/search-elements/${keywordsInput}`]);
  }
}
