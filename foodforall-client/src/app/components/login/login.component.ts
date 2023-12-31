import {Component} from '@angular/core';

import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  setLogged() {
    this.authService.logged = true;
  }
}
