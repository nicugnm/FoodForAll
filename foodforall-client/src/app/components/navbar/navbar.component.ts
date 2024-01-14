import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import {AuthService} from "../../services/auth/auth.service";
import {Flowbite} from "../../hacks";
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import {selectIsLoggedIn} from "../../services/auth/auth.selectors";
import {LogOut} from "../../services/auth/auth.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Flowbite()
export class NavbarComponent {

  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store<AppState>) {}

  isLogged() {
    return this.isLoggedIn$;
  }

  logout() {
    this.store.dispatch(LogOut());
  }

  dropdownInformationOpen = false;

  toggleDropdown(dropdown: string) {
    if (dropdown === 'dropdownInformation') {
      this.dropdownInformationOpen = !this.dropdownInformationOpen;
    }
    // Add more conditions for other dropdowns if needed
  }
}
