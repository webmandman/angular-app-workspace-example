import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Phone } from '../../../../../app/core/models/phone';
import { PhoneNumberValidationService } from '../../../../shared/utils/phonenumber-validation.service';

@Component({
  selector: 'app-phone-form',
  templateUrl: './form.component.html'
})
export class PhoneFormComponent implements OnChanges {

  phoneForm: FormGroup;
  controls: Record<string, AbstractControl>;
  requiredMessage: string;
  invalidMessage: string;
  phoneNumberMask: string;

  @Input() phonenumber: Phone;
  @Output() phoneSubmitted = new EventEmitter<Phone>();

  constructor(
    private location: Location,
    formBuilder: FormBuilder,
    private phonenumberValidator: PhoneNumberValidationService) {
    this.phoneForm = formBuilder.group({
      phonenumber: ['', Validators.compose([
        Validators.required,
        this.phonenumberValidator.patternValidator()
      ])]
    });
    this.controls =  this.phoneForm.controls;
    this.requiredMessage = phonenumberValidator.requiredMessage;
    this.invalidMessage = phonenumberValidator.invalidMessage;
    this.phoneNumberMask = phonenumberValidator.phoneNumberMask;
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.phonenumber && this.phonenumber){
        this.phoneForm.setValue(this.phonenumber);
    }
  }

  submitPhonenumber(): void{
    this.phoneSubmitted.emit(this.phoneForm.value);
  }

  cancel(): void{
    this.location.back();
  }

}
