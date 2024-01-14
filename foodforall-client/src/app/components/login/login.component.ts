import {Component} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordValidators} from "../register/password-validators";
import {Store} from "@ngrx/store";
import {LogIn} from "../../services/auth/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }, { validators: PasswordValidators.validateLogin });

  constructor(private store: Store) {
    this.store = store;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        LogIn({
          username: this.form.value['username'],
          password: this.form.value['password']
        })
      );
    }
  }
}
