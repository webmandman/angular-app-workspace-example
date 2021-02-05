import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberValidationService {

  requiredMessage = 'Phone Number is required.';
  invalidMessage = 'Your phone number must be 10 digits.';
  phoneNumberMask = '(999) 000-0000';

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value){
        return null;
      }
      const regex = new RegExp(/^((\\+91-?)|0)?[0-9]{10}$/);
      const valid = regex.test(control.value);
      return valid ? null : {invalid: true};
    };
  }

}
