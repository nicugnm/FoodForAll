import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {initFlowbite} from "flowbite";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./components/app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodforall-client';

  ngOnInit(): void {
    initFlowbite();
  }
}
