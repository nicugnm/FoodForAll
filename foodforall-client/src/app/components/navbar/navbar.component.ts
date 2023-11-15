import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import {AuthService} from "../../services/auth/auth.service";
import {Flowbite} from "../../hacks";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Flowbite()
export class NavbarComponent {

  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  isLogged(): boolean {
    return this.authService.logged;
  }

  setLogout(): void {
    this.authService.logged = false;
  }

  dropdownInformationOpen = false;

  toggleDropdown(dropdown: string) {
    if (dropdown === 'dropdownInformation') {
      this.dropdownInformationOpen = !this.dropdownInformationOpen;
    }
    // Add more conditions for other dropdowns if needed
  }
}
