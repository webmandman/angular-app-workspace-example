import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../../../../core/models/address';
import { SchemaFormUtils } from '../../../../shared/utils/schema-form-utils.service';
import { AddressFormSchema } from '../../../../core/constants/address-form.schema';
import { Location } from '@angular/common';

@Component({
  selector: 'address-form',
  templateUrl: './form.component.html'
})
export class AddressFormComponent implements OnChanges {

  addressForm: FormGroup;
  formSchema = AddressFormSchema;
  controls: Record<string, AbstractControl>;

  @Input() address: Address;
  @Output() addressSubmitted = new EventEmitter<Address>();

  constructor(
    private location: Location,
    formBuilder: FormBuilder) {
    this.addressForm = formBuilder.group(
      SchemaFormUtils.createControlsConfigFromSchema(this.formSchema)
    );
    this.controls = this.addressForm.controls;
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.address && this.address){
        this.addressForm.setValue(this.address);
    }
  }

  submitAddress(): void{
    this.addressSubmitted.emit(this.addressForm.value);
  }

  cancel(): void{
    this.location.back();
  }

}
