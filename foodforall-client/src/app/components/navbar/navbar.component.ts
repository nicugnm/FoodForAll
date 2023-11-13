import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private readonly authService: AuthService;

  protected dropdownOpen = false;

  closeDropdown() {
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  isLogged(): boolean {
    return this.authService.logged;
  }

  setLogout() {
    this.authService.logged = false;
  }

  protected readonly HTMLOptGroupElement = HTMLOptGroupElement;
}
