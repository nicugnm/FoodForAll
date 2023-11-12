import {Component, OnInit} from '@angular/core';

import {Collapse, Dropdown, initTE,} from "tw-elements";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    initTE({Collapse, Dropdown});
  }

  isLogged(): boolean {
    return this.authService.logged;
  }

  setLogout() {
    this.authService.logged = false;
  }
}
