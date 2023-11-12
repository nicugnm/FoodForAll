import {Component, OnInit} from '@angular/core';

import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  setLogged() {
    this.authService.logged = true;
  }

  ngOnInit() {
    initTE({ Input, Ripple });
  }
}
