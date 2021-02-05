import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CodeValidationService {

  invalidMessage = 'The code is invalid.';
  codeMask = 'AAA0000';

  patternValidator(matchCode: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value){
        return null;
      }
      console.log(control.value);
      console.log(matchCode);
      const valid = control.value === matchCode;
      return valid ? null : {invalid: true};
    };
  }

}
