import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";


export class PasswordValidators {
  static validateRegister(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const username = formGroup.get("username")?.value;
    const email = formGroup.get("email")?.value
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    const checkAgreedConditions = formGroup.get('checkAgreedConditions')?.value;

    if (!username || !email || !password || !confirmPassword || !checkAgreedConditions) {
      return { emptyField: true };
    }

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsNotMatching: true };
    }

    return null;
  }

  static validateLogin(control: AbstractControl): ValidationErrors | null {
    const formGroup = control as FormGroup;
    const username = formGroup.get("username")?.value;
    const password = formGroup.get('password')?.value;

    if (!username || !password) {
      return { emptyField: true };
    }

    return null;
  }
}
