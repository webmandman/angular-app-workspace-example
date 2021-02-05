import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidationService {

  requiredMessage = 'Password is required.';
  requiredConfirmMessage = 'Please confirm your password.';
  invalidPasswordMessage = 'Your password must be 8 characters long and contain one number and one symbol. (no spaces)';
  invalidMismatchMessage = 'The passwords do not match.';

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value){
        return null;
      }
      const regex = new RegExp(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/);
      const valid = regex.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }

  matchPassword(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

}
