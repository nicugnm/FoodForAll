import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Observable} from "rxjs";
import {AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, Validators} from "@angular/forms";
import {PasswordValidators} from "./password-validators";
import {LogIn, Register} from "../../services/auth/auth.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private store: Store) {
    this.store = store;
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    checkAgreedConditions: new FormControl('', Validators.required)
  }, { validators: PasswordValidators.validateRegister });

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get checkAgreedConditions() {
    return this.form.get('checkAgreedConditions');
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        Register({
          username: this.form.value['username'],
          email: this.form.value['email'],
          password: this.form.value['password'],
          confirmPassword: this.form.value['confirmPassword']
        })
      );
    }
  }
}
