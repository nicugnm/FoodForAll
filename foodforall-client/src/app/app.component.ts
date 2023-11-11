import { Component } from '@angular/core';
import { Carousel,
  Ripple,
  initTE, } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodforall-client';

  ngOnInit() {
    initTE({ Carousel, Ripple });
  }
}
